import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function card(props){
    return (
        <Link to={"/Post"+ props.slug} className="card" id={props.id}>

            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
           
        </Link>
        
        
    )
}