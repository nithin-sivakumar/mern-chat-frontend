/* eslint-disable no-unused-vars */
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div
      className={`w-[100vw] h-[100vh] xl:w-[90vw] xl:h-[90vh] bg-[#f4f5f8] rounded-[20px] flex ${
        lightTheme ? '' : 'dark-bg'
      }`}
    >
      <Sidebar />
      <Outlet />
      {/* <ChatArea
        props={{
          id: 1,
          name: 'Test #1',
          lastMessage: 'Last message #1',
          timeStamp: 'today'
        }}
      /> */}
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      {/* <UserGroups /> */}
    </div>
  );
};

export default Container;
