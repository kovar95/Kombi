import React from 'react';
import './App.scss';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import About from './components/About/About';
import Location from './components/Location/Location';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="body">
      <Menu />
      <Home />
      <About />
      <Contact />
      <Location />
    </div>
  );
}

export default App;
