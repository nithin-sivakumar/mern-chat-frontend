/* eslint-disable react/prop-types */
const MessageOthers = () => {
  let props = {
    name: 'RandomUser',
    message: 'This is a sample message.'
  };

  return (
    <div className='flex flex-start my-2'>
      <div className='flex gap-2'>
        <p className='con-icon-small'>{props.name[0]}</p>
        <div className='bg-[#999999] p-3 rounded-[20px]'>
          <p className='font-semibold text-[0.85rem] text-green-800'>
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
