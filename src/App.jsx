import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';


export default function App() {
  return (
    <div>
      <div className="parent">
        <NavBar />
        <Home/>
        <Footer />
      </div>
    </div>
  );
}
