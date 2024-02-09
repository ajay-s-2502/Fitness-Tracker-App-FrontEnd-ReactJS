import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Main from './components/main';
import Home from './components/home';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/fitness' element = {<Main/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
 
export default App;