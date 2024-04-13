/* eslint-disable no-unused-vars */
import './App.css';
import Login from './pages/Login';
import Container from './components/Container';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import ChatArea from './components/ChatArea';
import CreateGroups from './components/CreateGroups';
import Users from './components/User';
import Groups from './components/Group';
import { useSelector } from 'react-redux';
import Register from './pages/Register';

function App() {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div
      className={`bg-[#dddedd] min-h-[100vh] flex items-center justify-center ${
        lightTheme ? '' : 'dark'
      }`}
    >
      {/* <Container /> */}
      {/* <Login /> */}
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/app' element={<Container />}>
          <Route path='welcome' element={<Welcome />} />
          <Route path='chat' element={<ChatArea />} />
          <Route path='users' element={<Users />} />
          <Route path='groups' element={<Groups />} />
          <Route path='create-group' element={<CreateGroups />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
