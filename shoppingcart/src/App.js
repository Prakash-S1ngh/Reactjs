import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
     <div className='Navigation'>
      <div className='img'>
      <NavLink to='/'>
        <img src='https://codehelp-shopping-cart.netlify.app/logo.png'/>
        </NavLink>
      </div>
      <div className="btns">
        <NavLink to='/'>
        <div className='home'>Home</div>

        </NavLink>
        <NavLink to='/cart'>
        <div className='cart'>Cart</div>

        </NavLink>
        </div>

     </div>
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/cart'element={<Cart/>}/>

     </Routes>
    </div>
  );
}

export default App;
