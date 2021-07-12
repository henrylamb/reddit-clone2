import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from '../src/components/header';
import { Footer } from '../src/components/footer';
import { Feed } from '../src/features/feed/feed';



function App() {
  return (
    <div className="App">
      <Header className = 'header' />

      <Feed className = 'feed'/>

      <Footer className = 'footer' />

    </div>
  );
}

export default App;

// i can expand this later using rotuers and having a home page and others and refector the above into
