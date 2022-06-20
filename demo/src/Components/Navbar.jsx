import React from "react";
import './Navbar.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home  from './Home'
import About from './About';
import Contact from './Contact'
import Menu from './Menu';


export const Navbar = () => {
    return (
    <>
     <Router>
     <Menu></Menu>
            <Route exact path="/" component= {Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>   
      </Router>  
    </>
    )
    
}

export default Navbar;
