import React, { Component } from 'react';
import Search from '../Search/Search';
import Results from '../Results/Results';

class SearchContainer extends Component {
    state = {
        query: ""
    }
    handleSubmit = (e)=>{

    }

    render() {
        return (
            <div>
                <Search onInput={this.handleSubmit}/>
                <Results/>
            </div>
        );
    }
}

export default SearchContainer;
