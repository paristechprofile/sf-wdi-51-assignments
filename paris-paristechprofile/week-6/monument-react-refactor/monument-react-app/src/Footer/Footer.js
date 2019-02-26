import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="row">
                    <div className="social-links">
                        <i className="fab fa-facebook-f fa-3x"></i>
                        <i className="fab fa-twitter-square fa-3x"></i>
                        <i className="fab fa-instagram fa-3x"></i>
                    </div>
                </div>
                <div className="row subscribe">
                    <input type="emailAddress" placeholder="Email Address"/>
                    <div className="subscribeButton col-3">
                    <button type="submit">Subscribe</button>
                </div>
                </div>
                <div className="row">
                <p className="copyright">&copy;2019 Paris Taylor</p>
                </div>
            </footer>
        )
    }
}
export default Footer;
