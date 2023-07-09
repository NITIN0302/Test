import './App.css'
import React from 'react';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

function App() 
{
   return(
    <Router>
      <div>
        Navbar
        <Link style={{margin:'0 5px'}} to="/">Home</Link>
        <Link style={{margin:'0 5px'}} to="/menu">Menu</Link>
        <Link style={{margin:'0 5px'}} to="/contact">Contact</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
   );
}

export default App
