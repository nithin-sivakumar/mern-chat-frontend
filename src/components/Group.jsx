import image from '../Images/live-chat_512px.png';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

const Groups = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className='flex-[9.95] xl:flex-[0.7] flex flex-col'>
      <div
        className={`flex gap-5 items-center bg-[#fff] rounded-[20px] p-4 shadow-lg m-[10px] ${
          lightTheme ? '' : 'dark'
        }`}
      >
        <img src={image} alt='Live Chat' className='w-[4%]' />
        <p className='text-[1.25rem]'>Available Groups</p>
      </div>
      <div
        className={`bg-[#fff] rounded-[20px] py-[10px] px-[10px] m-[10px] shadow-lg flex items-center ${
          lightTheme ? '' : 'dark'
        }`}
      >
        <SearchIcon fontSize='medium' />
        <input
          type='text'
          placeholder='Search'
          className='w-full bg-transparent outline-none border-none text-[1.25rem] mx-[10px]'
        />
      </div>
      <div className='flex flex-col overflow-x-scroll user_groups'>
        <div
          className={`flex items-center gap-3 bg-white shadow-lg rounded-[20px] py-[10px] px-[10px] m-[10px] duration-200 hover:bg-[#E2E2E2] ${
            lightTheme ? '' : 'dark'
          }`}
        >
          <p className='con-icon-small'>T</p>
          <p>Test Group</p>
        </div>
        <div
          className={`flex items-center gap-3 bg-white shadow-lg rounded-[20px] py-[10px] px-[10px] m-[10px] duration-200 hover:bg-[#E2E2E2] ${
            lightTheme ? '' : 'dark'
          }`}
        >
          <p className='con-icon-small'>T</p>
          <p>Test Group</p>
        </div>
        <div
          className={`flex items-center gap-3 bg-white shadow-lg rounded-[20px] py-[10px] px-[10px] m-[10px] duration-200 hover:bg-[#E2E2E2] ${
            lightTheme ? '' : 'dark'
          }`}
        >
          <p className='con-icon-small'>T</p>
          <p>Test Group</p>
        </div>
      </div>
    </div>
  );
};

export default Groups;
