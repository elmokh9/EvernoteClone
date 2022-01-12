import "./header.css"
import logo from "./assets/logo.jpg"
import navbar from "./assets/icon.png";
import Navbar from "../navbar/Navbar.jsx";
import { useState } from "react";
import Sidenav from "../sidenav/Sidenav";
import Icon from "./closeIcon";

const Header = ()=>{
    const [sideNav, setsideNav] = useState(false);
    function clicked(){
        setsideNav((prevValue)=>{
            return !prevValue;
        });
        console.log(sideNav);
    }
    const list = [
        {id:0, name: "Why Evernote", link: "#"}, {id:1, name: "Features", link: "#"},{id:2, name: "Plans", link: "#"},{id:3, name: "Help", link: "#"},{name:"Log In", link: "#"}]

    // const stylee= {
    //     transform: : sideNav ? "translateX(600px)" : "none" ,
    //     visibility: sideNav ? "visible" : "hidden"
    // }
    return(
    <div className="global-header">
        <img className="logo" src={logo}></img>
        <div className="header">
            <div className="header-l">
                {list.map((items)=>{
                const{name, id, link} = items;
                console.log(id);
                return <Navbar data={name} key={id} id={id} link={link}/>
            })}
            </div>
            <div className="header-r">
                <a>Help</a>
                <a>Login</a>
                <button>Download</button>
            </div>
        </div>
        
        <button className="navBtn" onClick={clicked}><img className="icon" src={navbar}></img></button>
        <div className={sideNav? "sideNav show" : "sideNav hide"}>
            <div className="sideNavHead" onClick={clicked}><Icon /></div>
            {list.map((items)=>{
            const{name, id} = items;
            return(<Sidenav data={items} />)
        })}
        
    </div>
    </div>
    )
}

export default Header


// import "./header.css"

// const Header = (){
//     return<div></div>
// }

// export default Header