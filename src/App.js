
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
