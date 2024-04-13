import { useSelector } from 'react-redux';

/* eslint-disable react/prop-types */
const MessageOthers = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  let props = {
    name: 'RandomUser',
    message: 'This is a sample message.'
  };

  return (
    <div className='flex flex-start my-2'>
      <div className='flex gap-2'>
        <p className='con-icon-small'>{props.name[0]}</p>
        <div
          className={`bg-[#f4f5f8] p-3 rounded-[20px] ${
            lightTheme ? '' : 'dark-bg'
          }`}
        >
          <p
            className={`font-semibold text-[0.85rem] ${
              lightTheme ? 'text-green-800' : 'text-green-500'
            }`}
          >
            {props.name}
          </p>
          <p className='text-[1rem]'>{props.message}</p>
          <p className='text-[0.75rem] text-right'>12:00am</p>
        </div>
      </div>
    </div>
  );
};

export default MessageOthers;
