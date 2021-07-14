import React from 'react';
//import logo from './reddit-logo.png';
import './App.css';
import { Header } from '../src/components/header';
import { Footer } from '../src/components/footer';
import { Feed } from '../src/features/feed/feed';



function App() {
  return (
    <div className="App">
      <div className = "header">
        <Header />
      </div>

      <div className = "feed">
        <Feed />
      </div>

      <div className = "footer">
        <Footer />
      </div>

      
    </div>
  );
}

export default App;

// i can expand this later using rotuers and having a home page and others and refector the above into
