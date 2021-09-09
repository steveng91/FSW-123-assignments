import React from "react";
import './App.css';

function BoxCard(props){
    return(
        <div className= "card" style={{backgroundColor:props.bgcolor,width:props.width}}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <hr/>
            <h5>{props.description}</h5>
        </div>
    )
}

export default BoxCard