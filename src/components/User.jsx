import image from '../Images/live-chat_512px.png';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { accessChat, fetchUsers } from '../api/users';
import getCookie from '../utils/cookie';
import { useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Backdrop, CircularProgress } from '@mui/material';

const Users = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

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
    const checkLoggedIn = () => {
      const loggedIn = getCookie('at');
      if (!loggedIn) {
        navigate('/login');
      }
    };

    checkLoggedIn();
  });

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const response = await fetchUsers(getCookie('at'));
      if (response.statusCode === 200) {
        console.log('Fetched users successfully.');
        setUsers(response.payload);
        notify(response.message);
        setLoading(false);
      } else {
        console.error('Failed to fetch users: ', response.message);
        notify(response.message);
        setLoading(false);
      }
    };

    getUsers();
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
        <p className='text-[1.25rem]'>Online Users</p>
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
        {users.length > 0 ? (
          users.map((user) => {
            return (
              <div
                onClick={async () => {
                  setLoading(true);
                  const response = await accessChat(user._id, getCookie('at'));
                  if (response.statusCode === 200) {
                    console.log('Chat created successfully.');
                    notify(response.message);
                    setLoading(false);
                  } else {
                    console.error('Chat creation failed: ', response.message);
                    notify(response.message);
                    setLoading(false);
                  }
                }}
                key={user?._id}
                className={`flex items-center gap-3 bg-white shadow-lg rounded-[20px] py-[10px] px-[10px] m-[10px] duration-200 hover:bg-[#E2E2E2] ${
                  lightTheme ? '' : 'dark'
                }`}
              >
                <p className='con-icon-small'>{user?.name?.[0]}</p>
                <p>{user?.name}</p>
              </div>
            );
          })
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
};

export default Users;
