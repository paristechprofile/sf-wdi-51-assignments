import React from 'react';


let Search = (props) => {
    return (
        <div>
            <h1>What can I find for you today?</h1>
            <form>
                <input type="text" 
                placeholder="Search Here"  
                className="form-input"
                onKeyUp={props.onInput}
                />
                <button>GO!</button>
            </form>
        </div>
    );
    
}

export default Search;
