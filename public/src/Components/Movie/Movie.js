import React from "react";

export default function Movie(props) { 
    return (
      <div>
        <h3>{props.data.title} ({props.data.year})</h3>
        <img src={props.data.cover} alt='movie cover'/>
      </div>
    );
  
}
