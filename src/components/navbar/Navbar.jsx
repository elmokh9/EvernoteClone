import React from "react";
import "./navbar.css";

const Navbar = (props)=>{
    console.log(props.data);
    return <div className="navbarContents">
        <a href={props.link}>{props.data}</a>
    </div>
}

export default Navbar;