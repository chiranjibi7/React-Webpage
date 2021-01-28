import './App.css';
// import Header from './Components/Header';
// import Services from './Components/Services';
// import About from './Components/About';
// import Events from './Components/Events';
// import Footer from './Components/Footer';
// import Contact from './Components/Contact';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Users from './Components/Users';
import User from './Components/Users/User';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Header/>
      <Services/>
      <About/>
      <Events/>
      <Footer/>
      <Contact/> */}

      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contacts" component={Contacts}/>
      <Route exact path="/users" component={Users}/>  
      <Route exact path="/users/:userId" component={User}/>
      <Route path="*" render={
        ()=><h1>404</h1>
      }/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
 