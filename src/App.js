import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
import Contact from './Contact/Contact.js';
import Bundles from './Bundles/Bundles.js';

function App() {

 const [page, setPage] = useState('Home');

 const getPageFunction = (data) => {
   console.log(data);
   setPage(data);
 }
  return (
      <div class="bg">
        <Header func={getPageFunction} />
        {page == 'Home' ? <Home func={getPageFunction}/> : null }  
        {page == 'Contact' ? <Contact/> : null }  
        {page == 'CB' ? <Bundles/> : null}
      </div>
  );
}

export default App;