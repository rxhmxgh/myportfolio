import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from  './components/Footer';

import './styles/global.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Skills/>
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
