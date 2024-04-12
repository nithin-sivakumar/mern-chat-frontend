import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSelector } from 'react-redux';

const CreateGroups = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className='flex-[9.95] xl:flex-[0.7] flex self-center'>
      <div
        className={`bg-white m-[10px] flex-1 flex justify-between px-[20px] py-[10px] rounded-[20px] shadow-lg ${
          lightTheme ? '' : 'dark'
        }`}
      >
        <input
          type='text'
          placeholder='Enter group name'
          className={`outline-none border-none bg-transparent pl-[10px] text-[1.25rem] text-[#1c1c1c] ${
            lightTheme ? '' : 'dark'
          }`}
        />
        <IconButton>
          <CheckCircleIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
        </IconButton>
      </div>
    </div>
  );
};

export default CreateGroups;
