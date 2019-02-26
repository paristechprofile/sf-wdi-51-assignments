import React, {Component} from 'react';
import './Gallery.css';
import img1 from './Images/gallery_1.jpg';
import img2 from './Images/gallery_2.jpg';
import img3 from './Images/gallery_3.jpg';
import img4 from './Images/gallery_4.jpg';
import img5 from './Images/gallery_5.jpg';
import img6 from './Images/gallery_6.jpg';






class Gallery extends Component{
    render(){
        return(
            <div className="container-fluid">
    	        <div className="issueTitle col-12">
                    <h3>Issue Twenty</h3>
                    <h4>A Visual Guide to the Southwest</h4> 
                </div>

                <div className=" Row">
                    <div className="column1 col-md-4">
                        <img src={img1} alt="desert"/> 
                        <img src={img2} alt="desert"/> 
                    </div>
                    <div className="column2 col-md-4">
                        <img src={img3} alt="desert"/> 
                        <img src={img4} alt="desert"/> 
                    </div>
                    <div className="column3 col-md-4">	
                        <img src={img5} alt="desert"/> 
                        <img src={img6} alt="desert"/> 
                    </div>
                </div>
            </div>
        )
    }
}
export default Gallery;

