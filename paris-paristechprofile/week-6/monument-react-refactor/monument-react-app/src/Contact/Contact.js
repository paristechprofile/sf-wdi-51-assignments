import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component{
    render(){
        return(
            // <div class="container-fluid">
                    <form action="https://www.reddit.com/comment" method="POST">
                        <div className="row">
                            <div className="col-md-4">
                                <input type="text" className="form-control" id="name" placeholder="Full Name"/>
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" id="subject" placeholder="SUBJECT"/>
                            </div>
                            <div className="col-md-4">
                                <input type="email" className="form-control" id="email" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <textarea className="form-control" rows="10" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="row">  	
                            <div className="col-md-12">
                                <button className="form-control" type="submit">Submit Comment</button>
                            </div>
                        </div>
                    </form>

            // </div>
        )
    }
}

export default Contact;

