import "./header.css"
import logo from "./assets/logo.jpg"
import navbar from "./assets/icon.png";
import Navbar from "../navbar/Navbar.jsx";
import { useState } from "react";
import Sidenav from "../sidenav/Sidenav";

const Header = ()=>{
    const [sideNav, setsideNav] = useState(false);
    function clicked(){
        setsideNav((prevValue)=>{
            return !prevValue;
        });
        console.log(sideNav);
    }
    const list = [
        {name: "Home", link: "#"}, {name: "Social", link: "#"},{name: "Help", link: "#"}]
    return(
    <div className="header">
        <img className="logo" src={logo}></img>
        {list.map((items)=>{
            const{name, id} = items;
            return <Navbar data={name} key={id} link={items.link}/>
        })}
        <button onClick={clicked}><img className="icon" src={navbar}></img></button>
        {list.map((items)=>{
            const{name, id} = items;
            return(sideNav ? <Sidenav data={items}/> : null)
        })}
    </div>
    )
}

export default Header


// import "./header.css"

// const Header = (){
//     return<div></div>
// }

// export default Header