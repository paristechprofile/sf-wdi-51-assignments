import React, { Component } from 'react';

class Search extends Component {
    state = {
        query: 'Your hard-coded query'
    }
    handleSubmit = (e) => {
        console.log(e)
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
