/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ChatArea = () => {
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

  var props = conversations[0];

  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className='flex-[9.95] xl:flex-[0.7] flex flex-col'>
      {/* ChatArea Header */}
      <div
        className={`bg-[#fff] rounded-[20px] py-[10px] px-[10px] m-[10px] shadow-lg flex items-center justify-between gap-3 ${
          lightTheme ? '' : 'dark'
        }`}
      >
        <p className='con-icon'>{props.name[0]}</p>
        <div className='flex flex-1 flex-col items-start justify-center'>
          <p className='text-lg'>{props.name}</p>
          <p className='text-sm'>{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
        </IconButton>
      </div>
      {/* Messages Container */}
      <div
        className={`msg-container bg-[#fff] shadow-lg p-[10px] m-[10px] rounded-[20px] flex-1 overflow-y-scroll ${
          lightTheme ? '' : 'dark'
        }`}
      >
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
      </div>
      {/* Text Input Area */}
      <div
        className={`bg-[#fff] shadow-lg p-[10px] m-[10px] rounded-[20px] flex justify-between ${
          lightTheme ? '' : 'dark'
        }`}
      >
        <input
          type='text'
          placeholder='Type a message'
          className='outline-none border-none bg-transparent pl-[10px] text-[1.25rem] text-[#1c1c1c] flex-1'
        />
        <IconButton className={`icon ${lightTheme ? '' : 'dark'}`}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
