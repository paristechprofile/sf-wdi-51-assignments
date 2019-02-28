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
                    <li><a href="index.html#about">About</a></li>
                    <li><a href="index.html#gallery">Gallery</a></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><a href="index.html#contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;