import React from "react";
import "./navbar.css";

const Navbar = (props)=>{
    console.log(props.data);
    return (props.id < 3 ? <div className="navbarContents">
    <a href={props.link}>{props.data}</a>
    </div> : null);
}

export default Navbar;