import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Logo from './components/Logo.svg';
import Login from './components/Login';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';

function App() {
  const [islogedin, setLogin] = useState(false);
  function loginHanler(){
    setLogin(!islogedin)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <img src={Logo} alt="Logo" />
          <div className='major-btn'>
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/about'>About</Link></div>
            <div><Link to='/contact'>Contact</Link></div>
          </div>
          {!islogedin ? (
            <div className='major-btn2'>
              <div><Link to='/login'>Login</Link></div>
              <div><Link to='/Signin'>Signup</Link></div>
            </div>
          ) : (
            <div className='major-btn3'>
              <div><Link to='/dashboard'>Dashboard</Link></div>
              <div onClick={() => setLogin(false)}>
                <Link to='/'>Logout
                </Link>
                </div>
            </div>
          )}
        </nav>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login  loginHanler={loginHanler}/>} />
          <Route path='/Signin' element={<Signin   loginHanler={loginHanler}/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
