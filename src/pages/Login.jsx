import image from '../Images/live-chat_512px.png';

const Login = () => {
  return (
    <div className='w-[90vw] h-[90vh] bg-[#f4f5f8] rounded-[20px] flex'>
      {/* Image Container */}
      <div className='flex-[0.3] flex items-center justify-center'>
        <img src={image} alt='Live Chat' className='w-[80%]' />
      </div>
      {/* Login Box */}
      <div className='flex flex-[0.7] flex-col items-center justify-center gap-[20px] bg-[#fff] rounded-[20px] m-[10px] shadow'>
        <p className='text-[2rem] font-semibold'>Sign in to your account</p>
        <input
          type='text'
          placeholder='Username'
          className='outline-none w-[24rem] border-none pl-[20px] bg-[#f4f5f8] py-3 text-[1.25rem] rounded-[20px]'
        />
        <input
          type='password'
          placeholder='Password'
          className='outline-none w-[24rem] border-none pl-[20px] bg-[#f4f5f8] py-3 text-[1.25rem] rounded-[20px]'
        />
        <button className='bg-black text-white px-8 py-2 rounded-[10px] hover:rounded-[20px] shadow-lg hover:bg-stone-700 duration-200 hover:shadow-sm font-semibold text-[1.2rem]'>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
