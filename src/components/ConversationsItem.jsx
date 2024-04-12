/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

const ConversationsItem = ({ props }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('chat')}
      className='flex items-center justify-between m-2 hover:bg-[#999999] p-4 rounded-[20px] active:bg-white duration-200 cursor-pointer'
    >
      <div className='flex items-center justify-center gap-4'>
        <p className='con-icon'>{props.name[0]}</p>
        <div className='flex flex-col justify-center items-start gap-0'>
          <p className='text-lg'>{props.name}</p>
          <p className='text-sm'>{props.lastMessage}</p>
        </div>
      </div>
      <div>
        <p className='text-[0.75rem] mt-5'>{props.timeStamp}</p>
      </div>
    </div>
  );
};

export default ConversationsItem;
