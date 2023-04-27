import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// import './App.css';
// import Button from './components/Button';
// import Description from './components/Description';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import Nav from './components/Nav';
// import SectionCard from './components/SectionCard';
// import PaintingList from './components/PaintingsList/PaintingsList';
// import paintings from "./paintings.json"


// function App() {
//     const handleClick = () => {
//     console.log('Button clicked');
//     };
  
//   return (
//     <div className="App">
//       <Header /> 
//       <Nav />
//      <SectionCard />
   
//       <PaintingList paintings={paintings} />
//       <Button   text="Новинки"
//         backgroundColor="#28a745"
//         color="#fff"
//         onClick={handleClick} />
//        <Description />
      
//      <Footer />

//     </div>
//   );
// }

// export default App;
