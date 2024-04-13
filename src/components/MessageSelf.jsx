import { useSelector } from 'react-redux';

/* eslint-disable react/prop-types */
const MessageSelf = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  let props = {
    name: 'You',
    message: 'This is another sample message.'
  };

  return (
    <div className='flex justify-end my-2'>
      <div
        className={`p-3 rounded-[20px] ${
          lightTheme ? 'bg-green-500' : 'bg-green-700'
        }`}
      >
        <p className='text-[1rem]'>{props.message}</p>
        <p className='text-[0.75rem] text-right'>12:00am</p>
      </div>
    </div>
  );
};

export default MessageSelf;
