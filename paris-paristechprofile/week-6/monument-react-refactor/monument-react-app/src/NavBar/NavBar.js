import React, {Component} from 'react';
import './NavBar.css';
import {
    Link
  } from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><Link to="index.html#about">About</Link></li>
                    <li><Link to="index.html#gallery">Gallery</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="index.html#contact">Contact</Link></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;