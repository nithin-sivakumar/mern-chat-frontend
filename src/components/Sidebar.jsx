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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../contexts/themeSlice';

const Sidebar = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Test #1',
      lastMessage: 'Last message #1',
      timeStamp: 'today'
    },
    {
      id: 2,
      name: 'Test #2',
      lastMessage: 'Last message #2',
      timeStamp: 'today'
    },
    {
      id: 3,
      name: 'Test #3',
      lastMessage: 'Last message #3',
      timeStamp: 'today'
    }
  ]);

  const navigate = useNavigate();

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
          {conversations.map((conversation) => {
            return (
              <ConversationsItem key={conversation.id} props={conversation} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
