import React from "react";

export default function card(props){

    return (
        <div className="card" id={props.id}>
            <h3>{props.title}</h3>
            <img src={props.img} alt="" />
        </div>
        
    )
}