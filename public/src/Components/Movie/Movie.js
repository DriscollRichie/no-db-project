import React from "react";
import './Movie.css'

export default function Movie(props) { 
    return (
      <div>
        <h3 className='movie-title'>{props.data.title} ({props.data.year})</h3>
        <img src={props.data.cover} alt='movie cover'/>
        <button onClick={() => props.addToListFn(props.data.title, props.data.year, props.data.cover)}>Add To List</button>
      </div>
    );
  
}
