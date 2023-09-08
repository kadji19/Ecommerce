import React  from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import Cart from './Cart'
import Home from './Home';
import Contact from './Contact';
import About from './About.jsx';
import Vetements from './Vetements';
import Meubles from './Meubles';
import Chaussures from './Chaussures';
import { CartProvider } from 'react-use-cart';




function Layout() {

  return (
     <> 
      <CartProvider>
        <Header/>
        <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path='/login' element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/vetements' element={<Vetements />} />
                <Route path='/chaussures' element={<Chaussures />} />
                <Route path='/meubles' element={<Meubles />} />
        </Routes>
        <Footer/>
      </CartProvider>
     
     </>
  )
}

export default Layout