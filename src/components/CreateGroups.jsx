import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import getCookie from '../utils/cookie';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { createGroup, fetchUserDetails } from '../api/users';
import { Backdrop, CircularProgress } from '@mui/material';

const CreateGroups = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [groupName, setGroupName] = useState('');
  const [user, setUser] = useState({});

  const notify = (text) => {
    toast(`🦄 ${text}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce
    });
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      const loggedIn = getCookie('at');
      if (!loggedIn) {
        navigate('/login');
      }

      const response = await fetchUserDetails(getCookie('at'));
      setUser(response.payload);
      notify(response.message);
    };

    checkLoggedIn();
  }, [navigate]);

  const handleSubmit = async () => {
    setLoading(true);
    const response = await createGroup(
      { name: groupName, users: [user._id] },
      getCookie('at')
    );
    if (response.statusCode === 200) {
      notify(response.message);
      setLoading(false);
      navigate('/app/groups');
    } else {
      console.error('Failed to fetch groups: ', response);
      notify(response.message);
      setLoading(false);
    }
  };

  return (
    <div className='flex-[9.95] xl:flex-[0.7] flex self-center'>
      <ToastContainer />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        // onClick={handleClose}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <div
        className={`bg-white m-[10px] flex-1 flex justify-between px-[20px] py-[10px] rounded-[20px] shadow-lg ${
          lightTheme ? '' : 'dark'
        }`}
      >
        <input
          onChange={(e) => setGroupName(e.target.value)}
          type='text'
          placeholder='Enter group name'
          className={`outline-none flex-1 border-none bg-transparent pl-[10px] text-[1.25rem] text-[#1c1c1c] ${
            lightTheme ? '' : 'dark'
          }`}
        />
        <IconButton onClick={handleSubmit}>
          <CheckCircleIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
        </IconButton>
      </div>
    </div>
  );
};

export default CreateGroups;
