import image from '../Images/live-chat_512px.png';
import { useSelector } from 'react-redux';
import getCookie from '../utils/cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Welcome = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = () => {
      const loggedIn = getCookie('at');
      if (!loggedIn) {
        navigate('/login');
      }
    };

    checkLoggedIn();
  });

  return (
    <div
      className={`flex flex-[9.95] xl:flex-[0.7] flex-col items-center justify-center gap-[20px] text-[#00000090] rounded-[20px] ${
        lightTheme ? '' : 'dark-bg'
      }`}
    >
      <img src={image} alt='' />
      <p className='mx-20'>
        Experience instant connection with our sleek and secure chat app – where
        conversations come alive.
      </p>
      <p>
        Built with ❤️, by{' '}
        <a
          className='hover:underline hover:underline-offset-4'
          href='https://github.com/nithin-sivakumar'
          target='_blank'
        >
          Nithin Sivakumar
        </a>
      </p>
    </div>
  );
};

export default Welcome;
