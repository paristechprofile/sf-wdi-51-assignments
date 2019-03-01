import React, { Component } from 'react';
import Search from '../Search/Search';
import axios from 'axios';
// import Results from '../Results/Results';

class SearchContainer extends Component {
    state = {
        query: "",
        response: []
    }
    
    searchQuery = (e)=>{
        this.setState({
            query:e.target.value
        })
    }
    // getGiphys = () => {
    //     axios.get('http://api.giphy.com/v1/gifs/search',
    //         {
    //             params: {
    //                 api_key:'jLRvlnP8XNkx7nW7LIDVjWC8giYe9Yzw',
    //                 q:this.state.query
    //         }
    //     .then((res) => {
    //         this.setState({
    //             response: res.data.data
    //         })
    //     })
    // })

    render() {
        return (
            <div>
                <Search onInput={this.handleSubmit}/>
                {/* <Results/> */}
            </div>
        );
    }
}

export default SearchContainer;
