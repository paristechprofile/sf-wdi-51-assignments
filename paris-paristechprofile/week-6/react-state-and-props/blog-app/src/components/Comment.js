import React, {Component} from 'react';

class Comment extends Component {
    state = {
        karma: 'good',
        message: this.props.message
    };
    
    changeKarma = () => {
        if (this.state.karma === 'good'){
            this.setState({
                karma: 'bad',
                message: 'Removed!'
            });
        } else {
            this.setState({
                karma: 'good',
                message: this.props.message
            });
        }
    }

    render () {
        debugger;
        return (
            <div className={this.state.karma}>
            <p>{this.state.message}</p>
            <button className={ 'button' } onClick={ this.changeKarma }
            > Change Karma </button>
            </div>
        )
    }
}

export default Comment