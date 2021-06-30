import React,{useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData} from "./SidebarData";
import './Navbar.css';

function Navbar() {

    const [sidebar,setSidebar] =useState("");

    const showSidebar = () => setSidebar(!sidebar);
        return (
       <> 
        <div className="navbar">
            <Link to="#" className="menu-bars">

            <FaIcons.FaBars/>
            </Link>
        </div>
        <nav className={sidebar ? 'nave-menu active':'nav-menu'}>
            <ul classname="nav-menu-items">
                <li classname="navbar-toggle">
                   
                </li>{SidebarData.map((item,index)=>{
                     return(
                         <li key={index} className={item.cName}>
                             <Link to={item.path}>
                                 {item.icon}
                                 <span>{item.title}</span>
                             </Link>
                         </li>
                     )
                })}
            </ul>
        </nav>

    </>
    );
}

export default Navbar;