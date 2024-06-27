
import './App.css';
import { useEffect, useState } from 'react';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import {  Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
    <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />

        </Routes>
      



      {/* <Home/>  */}

    </>
  );
}

export default App;
// {
//   images?.map((item) => {
//     const blurUrl = item?.blurImage
//     const originalImageUrl = item?.image
//     return (
//       <ImageLazyLoad blurUrl={blurUrl} originalImage={originalImageUrl} />
//     )
//   })
// }