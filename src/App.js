import './App.css';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
import React, { useState } from 'react';

function App() {

 const [page, setPage] = useState('Home');

 const getPageFunction = (data) => {
   setPage(data);
 }
  return (
      <div class="bg">
        <Header func={getPageFunction} />
        {page == 'Home' ? <Home/> : null }     
      </div>
  );
}

export default App;