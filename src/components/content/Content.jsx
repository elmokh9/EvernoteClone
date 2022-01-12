import React from "react";
import "./content.css"
import ContList from "./CarContent.jsx";
import CarCont from "./CarItems.jsx";

const Content = ()=>{
    return(
        <div className="hero-row">
            <div className="hero-img"><img src="https://evernote.com/c/assets/homepage-repackaging/task_hero_image@2x__en.png?b8ddc3599750b793"></img></div>
            <div className="carousel-container">
            {ContList.map((values)=>{
                console.log("1");
                return <CarCont key={values.id} content ={values}/>
            })}
            </div>
        </div> 
    )
}

export default Content;


