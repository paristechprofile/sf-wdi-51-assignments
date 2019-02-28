import React from 'react';
// import { SocialIcon } from 'react-social-icons';
import './Footer.css'
// npm install react-social-icons --save-dev
// https://www.npmjs.com/package/react-social-icons

const footer = () => {
    return (
        <footer>
		<div className="row">
			<div className="col-12">
                <a href="#"><i className="instagram"></i></a>
				<a href="#"><i className="twitter"></i></a>
                <a href="#"><i className="fa fa-facebook-square"></i></a>
            </div>
            <div className="row">
			    <input type="text" placeholder="Email Address"/>
			    <button type="submit">Keep in Touch</button>
            </div>
		</div>

		<p className="copyright">&copy;2016 Sarah Holden</p>
	</footer>
    )
}

export default footer;