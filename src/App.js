import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { selectUser } from './features/user/userSlice';
import {useSelector} from 'react-redux'
import Login from './components/Login';

function App() {
  const user= useSelector(selectUser)
  
  return (
    <div className="app">
      <Header/>

      { !user ? (
          <Login />
        ) : ( 
          <div className="app__body">
            <Sidebar />
            <Feed/>
          </div>
         
        )
      }

    </div>
  );
}

export default App;
