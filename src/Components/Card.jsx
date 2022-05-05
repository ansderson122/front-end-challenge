import React from "react";
import "./Card.css"

export default function card(props){

    return (
        <div className="card" id={props.id}>
            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
        </div>
        
    )
}