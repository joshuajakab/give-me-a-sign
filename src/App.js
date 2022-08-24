import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Menu from './Components/Menu';
import PastWork from './Components/PastWork';
import PhoneHeader from "./Components/PhoneHeader";
import { useWindowWidthAndHeight } from './hooks/useWindow';



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  

    const menuToggle = () => {
        setMenuOpen(menuOpen => !menuOpen)
    }
    
  return (
    <div className="App">
      
      <PhoneHeader click={menuToggle}/>

      {menuOpen && [
      <Menu click={menuToggle}/>
      ]}
      

      <Switch>
        <Route exact path='/' render={() => (
          <Home />
        )} />
        <Route path='/pastwork' render={() => (
          <PastWork />
        )} />
        <Route path='/contact' render={() => (
          <Contact />
        )} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
