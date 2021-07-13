import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
import Contact from './Contact/Contact.js';
import About from './About/About.js';
import Bundles from './Bundles/Bundles.js';
import Marketplace from './Marketplace/Marketplace.js';

function App() {

 const [page, setPage] = useState('Home');

 const getPageFunction = (data) => {
   setPage(data);
 }
  return (
      <div class="bg">
        <Header func={getPageFunction} />
        {page == 'Home' ? <Home func={getPageFunction}/> : null }  
        {page == 'Contact' ? <Contact/> : null }  
        {page == 'About' ? <About/> : null }  
        {page == 'CB' ? <Bundles/> : null}
        {page == 'NFT' ? <Marketplace/> : null}
      </div>
  );
}

export default App;