/* eslint-disable no-unused-vars */
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import ConversationsItem from './ConversationsItem';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../contexts/themeSlice';
import getCookie from '../utils/cookie';
import { fetchChats } from '../api/users';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Backdrop, CircularProgress } from '@mui/material';

const Sidebar = () => {
  const [conversations, setConversations] = useState([]);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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
    const getChats = async () => {
      setLoading(true);
      console.log(`Fetching chats`);
      const response = await fetchChats(getCookie('at'));
      if (response.statusCode === 200) {
        console.log('Login successful');
        setConversations(response.payload);
        notify(response.message);
        setLoading(false);
      } else {
        console.error('Login failed: ', response.message);
        notify(response.message);
        setLoading(false);
      }
    };

    getChats();
  }, []);

  // const [lightTheme, setLightTheme] = useState(true);
  // console.log(useSelector((state) => state.themeKey));

  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <>
      <div
        className={`${
          lightTheme ? '' : 'dark'
        } xl:hidden bg-[#fff] flex-[0.05] rounded-[20px] py-[10px] px-[5px] m-[10px] shadow-lg flex flex-col items-center justify-between`}
      >
        <ToastContainer />
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
          // onClick={handleClose}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
        <div>
          <IconButton>
            <AccountCircleIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
          </IconButton>
        </div>
        <div className='flex flex-col items-center'>
          <IconButton onClick={() => navigate('users')}>
            <PersonAddIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
          </IconButton>
          <IconButton onClick={() => navigate('groups')}>
            <GroupAddIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
          </IconButton>
          <IconButton onClick={() => navigate('create-group')}>
            <AddCircleIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
          </IconButton>
          <IconButton onClick={() => dispatch(toggleTheme())}>
            {lightTheme && (
              <NightlightIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
            )}
            {!lightTheme && (
              <LightModeIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
            )}
          </IconButton>
        </div>
      </div>
      <div className='flex-[0.3] hidden xl:flex flex-col'>
        {/* Sidebar Header */}
        <div
          className={`${
            lightTheme ? '' : 'dark'
          } hidden xl:flex bg-[#fff] rounded-[20px] py-[10px] px-[5px] m-[10px] shadow-lg flex justify-between`}
        >
          <div>
            <IconButton>
              <AccountCircleIcon
                className={`icon ${lightTheme ? '' : 'dark'}`}
              />
            </IconButton>
          </div>
          <div>
            <IconButton onClick={() => navigate('users')}>
              <PersonAddIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
            </IconButton>
            <IconButton onClick={() => navigate('groups')}>
              <GroupAddIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
            </IconButton>
            <IconButton onClick={() => navigate('create-group')}>
              <AddCircleIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
            </IconButton>
            <IconButton onClick={() => dispatch(toggleTheme())}>
              {lightTheme && (
                <NightlightIcon
                  className={`icon ${lightTheme ? '' : 'dark'}`}
                />
              )}
              {!lightTheme && (
                <LightModeIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
              )}
            </IconButton>
          </div>
        </div>
        {/* Sidebar Search */}
        <div
          className={`bg-[#fff] hidden xl:flex rounded-[20px] py-[10px] px-[10px] m-[10px] shadow-lg flex items-center ${
            lightTheme ? '' : 'dark'
          }`}
        >
          <SearchIcon className='icon' />
          <input
            type='text'
            placeholder='Search'
            className='w-full outline-none border-none text-[1.25rem] mx-[10px] bg-transparent'
          />
        </div>
        {/* SearchBar Conversations */}
        <div
          className={`bg-[#fff] hidden xl:block rounded-[20px] py-[5px] px-0 pr-2 m-[10px] shadow-lg flex-1 ${
            lightTheme ? '' : 'dark'
          }`}
        >
          {conversations.map((conversation, index) => {
            return (
              // <ConversationsItem key={conversation.id} props={conversation} />
              <div
                key={conversation._id}
                onClick={() =>
                  navigate('chat/' + conversation._id + '&' + conversation.name)
                }
                className='flex items-center justify-between m-2 hover:bg-[#999999] p-4 rounded-[20px] active:bg-white duration-200 cursor-pointer'
              >
                <div className='flex items-center justify-center gap-4'>
                  <p className='con-icon'>{conversation.name[0]}</p>
                  <div className='flex flex-col justify-center items-start gap-0'>
                    <p className='text-lg'>{conversation.name}</p>
                    <p className='text-sm'>
                      {conversation?.latestMessage
                        ? conversation?.latestMessage
                        : 'No chats yet. Send a message now'}
                    </p>
                  </div>
                </div>
                <div>
                  <p className='text-[0.75rem] mt-5'>
                    {new Date(conversation.updatedAt).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
