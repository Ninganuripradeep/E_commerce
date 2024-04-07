
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men_banner.png'
import women_banner from './Components/Assets/men_banner.png'
import kids_banner from './Components/Assets/men_banner.png'
import UserDetails from './Components/UserDetails/UserDetails';
import SideNav from './Components/SideNav/SideNav';
import Navbar2 from './Components/Navbar2/Navbar2';
import { useEffect, useState } from 'react';

function App() {
  const[backgroundColor,setBackgroundColor]=useState();
  
  useEffect(()=>{
    const fetchBackgroundColor=async()=>{
    try{
      const response=await fetch('http://localhost:8000/getbackgroundcolor');
      if(response.ok){
        const{color}=await response.json();
        setBackgroundColor(color||"#ffffff");
      }
      else{
        console.log('error fetching background color');
      }
    
  }catch(error){
      console.log('error:',error)
    }
  };
  fetchBackgroundColor();
  },[]);

    

    
    
      
  return (
    <div  style={{backgroundColor:backgroundColor}}>
    <BrowserRouter>
    <Navbar/>
    <Navbar2/>
    <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}></Route>
      <Route path="/userdetails"  element={<UserDetails/> }></Route>
            
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}></Route>
      </Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    <Footer/>

    </BrowserRouter>
    
     
  
    </div>
  );
}

export default App;
