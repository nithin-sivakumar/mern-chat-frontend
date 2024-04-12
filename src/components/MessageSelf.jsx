/* eslint-disable react/prop-types */
const MessageSelf = () => {
  let props = {
    name: 'You',
    message: 'This is another sample message.'
  };

  return (
    <div className='flex justify-end my-2'>
      <div className='bg-green-500 p-3 rounded-[20px]'>
        <p className='text-[1rem]'>{props.message}</p>
        <p className='text-[0.75rem] text-right'>12:00am</p>
      </div>
    </div>
  );
};

export default MessageSelf;
