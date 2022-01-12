import React from "react";
import "./sideNav.css";

const Sidenav = (props)=>{
    return<div className="sideNavItems">{props.data.name}</div>
}

export default Sidenav;