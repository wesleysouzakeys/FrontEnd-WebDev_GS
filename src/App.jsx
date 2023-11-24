import { } from 'react';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import './App.scss'

function App() {
  return (
    <>
      <div className='main-container'>
        <Nav />
        <Outlet />
      </div>
    </>
  );
}

export default App;
