import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Header from './components/Header'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
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
