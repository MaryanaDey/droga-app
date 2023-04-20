
import './App.css';
import Button from './components/Button';
import Description from './components/Description';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import HomePage from './components/pages/HomePage/HomePage';
import PaintingList from './components/PaintingsList/PaintingsList';
import paintings from "./paintings.json"


function App() {
    const handleClick = () => {
    console.log('Button clicked');
  };
  return (
    <div className="App">
      {/* <header className="App-header">
      </header>
      <Header /> */}
      {/* <HomePage /> */}
        <Header /> 
   
      <PaintingList paintings={paintings}
       />
      <Button   text="Новинки"
        backgroundColor="#28a745"
        color="#fff"
        onClick={handleClick} />
      <Description />
      
         <Footer />

    </div>
  );
}

export default App;
