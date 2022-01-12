import React from "react";
import "./content.css";

{/* TODO carousel component */}
let CarCont = (props)=>{
    const{id, heading, para} = props.content;
    return(
    <div className="carousel-items">
        <div className="carousel-heading">{heading}</div>
        <div className="carousel-content">
            <p>{para}</p>
        </div>
    </div>)
}
export default CarCont;