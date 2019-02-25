import React, { Component } from 'react'; /* import the react library from library */
import Comment from './Comment';
import './App.css';


class Post extends Component {
  render() { /* required next step */
    let comments = this.props.post.comments.map((comment, index)=>( /* we want to use map to go through an array */
      <Comment message={comment} key={index}/>
    ))
    return (
      <div className="App">
        <h1> {this.props.post.title}</h1> {/* jsx */}
        <h2> {this.props.post.author}</h2>
        <h3> {this.props.post.body}</h3>
        <p> 
          {comments}
        </p>
      </div>
    );
  }
}

export default Post;
