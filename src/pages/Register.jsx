import { useEffect, useState } from 'react';
import image from '../Images/live-chat_512px.png';
import { register } from '../api/auth';
import { toast, Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import getCookie from '../utils/cookie';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkLoggedIn = () => {
      const loggedIn = getCookie('at');
      // console.log(loggedIn);
      if (loggedIn?.length > 0) {
        navigate('/app/welcome');
      }
    };

    checkLoggedIn();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { name: name, email: email, password: password };
      console.log(`req.body = ${JSON.stringify(formData)}`);
      const response = await register(formData);
      if (response.statusCode === 201) {
        console.log('Registration successful');
        notify(response.message);
        setTimeout(() => navigate('/app/welcome'), 5000);
      } else {
        console.error('Registration failed: ', response.message);
        notify(response.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='w-[90vw] h-[90vh] bg-[#f4f5f8] rounded-[20px] flex'>
      <ToastContainer />
      {/* Image Container */}
      <div className='flex-[0.3] flex items-center justify-center'>
        <img src={image} alt='Live Chat' className='w-[80%]' />
      </div>
      {/* Register Box */}
      <form className='flex flex-[0.7] flex-col items-center justify-center gap-[20px] bg-[#fff] rounded-[20px] m-[10px] shadow'>
        <p className='text-[2rem] font-semibold'>Create an account</p>
        <input
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Full Name'
          className='outline-none w-[24rem] border-none pl-[20px] bg-[#f4f5f8] py-3 text-[1.25rem] rounded-[20px]'
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          placeholder='Email'
          className='outline-none w-[24rem] border-none pl-[20px] bg-[#f4f5f8] py-3 text-[1.25rem] rounded-[20px]'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
          className='outline-none w-[24rem] border-none pl-[20px] bg-[#f4f5f8] py-3 text-[1.25rem] rounded-[20px]'
        />
        <button
          onClick={handleSubmit}
          className='bg-black text-white px-8 py-2 rounded-[10px] hover:rounded-[20px] shadow-lg hover:bg-stone-700 duration-200 hover:shadow-sm font-semibold text-[1.2rem]'
        >
          Register
        </button>
        <p>
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className='text-green-700 font-semibold hover:underline hover:underline-offset-4 cursor-pointer'
          >
            Sign in now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
