import React, { Component } from 'react';
import Search from '../Search/Search';

class SearchContainer extends Component {
    state = {
        query: "puppies"
    }
    render() {
        return (
            <div>
                <Search/>
            </div>
        );
    }
}

export default SearchContainer;
