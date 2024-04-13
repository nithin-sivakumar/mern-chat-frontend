import image from '../Images/live-chat_512px.png';
import SearchIcon from '@mui/icons-material/Search';
import { Backdrop, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import getCookie from '../utils/cookie';
import { useNavigate } from 'react-router-dom';
import { fetchGroups, fetchUserDetails, joinGroup } from '../api/users';

const Groups = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState([]);
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
  }, []);

  useEffect(() => {
    const getGroups = async () => {
      setLoading(true);
      const response = await fetchGroups(getCookie('at'));
      if (response.statusCode === 200) {
        console.log('Groups fetched successfully.');
        setGroups(response.payload);
        notify(response.message);
        setLoading(false);
      } else {
        console.error('Failed to fetch groups: ', response);
        notify(response.message);
        setLoading(false);
      }
    };

    getGroups();
  }, []);

  return (
    <div className='flex-[9.95] xl:flex-[0.7] flex flex-col'>
      <ToastContainer />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        // onClick={handleClose}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <div
        className={`flex gap-5 items-center bg-[#fff] rounded-[20px] p-4 shadow-lg m-[10px] ${
          lightTheme ? '' : 'dark'
        }`}
      >
        <img src={image} alt='Live Chat' className='w-[4%]' />
        <p className='text-[1.25rem]'>Available Groups</p>
      </div>
      <div
        className={`bg-[#fff] rounded-[20px] py-[10px] px-[10px] m-[10px] shadow-lg flex items-center ${
          lightTheme ? '' : 'dark'
        }`}
      >
        <SearchIcon fontSize='medium' />
        <input
          type='text'
          placeholder='Search'
          className='w-full bg-transparent outline-none border-none text-[1.25rem] mx-[10px]'
        />
      </div>
      <div className='flex flex-col overflow-x-scroll user_groups'>
        {groups.length > 0 ? (
          groups.map((group) => (
            <div
              onClick={async () => {
                setLoading(true);
                console.log({ chatId: group._id, userId: user._id });
                const response = await joinGroup(
                  { chatId: group._id, userId: user._id },
                  getCookie('at')
                );
                if (response.statusCode === 200) {
                  console.log('Group joined successfully.');
                  // notify(response.message);
                  setLoading(false);
                } else {
                  console.error('Failed to join group: ', response.message);
                  notify(response.message);
                  setLoading(false);
                }
              }}
              key={group._id}
              className={`flex items-center gap-3 bg-white shadow-lg rounded-[20px] py-[10px] px-[10px] m-[10px] duration-200 hover:bg-[#E2E2E2] ${
                lightTheme ? '' : 'dark'
              }`}
            >
              <p className='con-icon-small'>{group?.name?.[0]}</p>
              <p>{group?.name}</p>
            </div>
          ))
        ) : (
          <p className='text-center mt-20'>No groups yet. Create one</p>
        )}
      </div>
    </div>
  );
};

export default Groups;
