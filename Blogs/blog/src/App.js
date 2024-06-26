
import { useContext, useEffect } from 'react';
import './App.css';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import  { AppContext } from './components/AppContext';

import {Route, Routes, useLocation} from 'react-router';
import Home from './Pages/Home';
import Tag from './Pages/Tag';
import BlogDetails from './Pages/BlogDetails';
import { useSearchParams } from 'react-router-dom';


function App() {
  const {fetching,clickHandler} = useContext(AppContext)

  const [searchParams] = useSearchParams()
  const location = useLocation()

  useEffect(()=>{
   const page = searchParams.get("page") ?? 1;
   if(location.pathname.includes('tags')){
    const tags = location.pathname.split('/').at(-1).replaceAll("-" , " ")
    console.log("tags clicked")
    fetching(Number(page) , tags)
   }
   else if(location.pathname.includes('category')){
    const category = location.pathname.split('/').at(-1).replaceAll("-"," ")
    fetching(Number(page) , category)
   }
   else{
     fetching(Number(page))

   }
  },[location.pathname , location.search])
  
 
  return (
    
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/category/:category' element={<BlogDetails/>}/>
    <Route path='/tags/:tag' element={<Tag/>}/>

  </Routes>
  );
}

export default App;
