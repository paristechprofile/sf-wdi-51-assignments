import React, {Component} from 'react';
import Comment from './Comment';

class CommentContainer extends Component{
    state = {
        commentList: this.props.comments,
        newCommentValue: ``
    };

    
    handleSubmit = (event) => {
        let newComment = this.state.newCommentValue;
        this.state.commentList.push(newComment);
        
        this.setState({
            commentList: this.state.commentList,
            newCommentValue: ``
        })
        console.info(`A new comment was submitted: "${newComment}"`)
        event.preventDefault();
    }

    handleChange = (event) => {
        console.log("A change occured. The change is: " + event.target.value);
        this.setState({newCommentValue: event.target.value})
    }

    render(){
        debugger;
        let comments = this.state.commentList.map((comment, index) => (
            <Comment message={comment} key={index}/>
        ));
        return(
            <div>
                <h3>Comments</h3>
                { comments }
                
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="message">
                        Message: 
                        <input type="text" name="message" onChange={this.handleChange} value={this.state.newCommentValue}/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
export default CommentContainer;