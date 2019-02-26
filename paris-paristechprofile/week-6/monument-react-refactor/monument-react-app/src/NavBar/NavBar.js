import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><a href="index.html#about">About</a></li>
                    <li><a href="index.html#gallery">Gallery</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="index.html#contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;