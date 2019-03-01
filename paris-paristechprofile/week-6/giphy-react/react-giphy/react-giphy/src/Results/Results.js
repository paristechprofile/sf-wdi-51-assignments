import React from 'react';


const Results = (props) =>{
    return (
        <div>
            <h2>{props.results.title}</h2>                
            <img 
            className="card-img-top"
            src={props.result.images.fixed_height.url} 
            alt={props.result.title}/>
        </div>
    );
}


export default Results;
