import React, { Component } from 'react';

class Search extends Component {
    state = {
        query: 'hi'
    }
    handleSubmit = (e) => {
        console.log(`happy baby for 500, Trebek`)
        e.preventDefault();  
    };

    render() {
        return (
            <div>
                <h1>{this.state.query}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className='form-input'></input>
                    <button>GO!</button>
                </form>
            </div>
        );
    }
}

export default Search;
