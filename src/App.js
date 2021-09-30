import React, {useEffect} from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { selectUser, logout, login } from './features/user/userSlice';
import {useSelector} from 'react-redux'
import Login from './components/Login';
import { auth } from './Firebase/firebase'
import { useDispatch } from 'react-redux';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   auth.onAuthStateChanged(userAuth => {
  //     if (userAuth) {
  //       dispatch(login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //           photoUrl: userAuth.photoURL
  //       }))
  //     } else {
  //       dispatch(logout())
  //     }
  //   })
  // }, [])
  
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
