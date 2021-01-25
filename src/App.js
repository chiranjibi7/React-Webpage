import './App.css';
import Header from './Components/Header';
import Services from './Components/Services';
import About from './Components/About';
import Events from './Components/Events';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <About/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default App;
 