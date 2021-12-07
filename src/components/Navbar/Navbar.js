import React,{useState} from "react";
import { useEffect } from "react/cjs/react.development";
import {MenuItems} from "./MenuItems"
import "./Navbar.css"

// class Navbar extends Component{
//     state={ clicked:false}
//     handleClick=()=>{
//         this.setState({clicked:!this.state.clicked})
//     }

    export default function Header(){
        const[clicked,setClicked]=useState(false);
        const handleClick=()=>{
            setClicked(!clicked);

        }; 
       
        return(
            <nav className="NavbarItems" >
                <h1 className="navbar-logo">
                    S
                </h1>
                <div className="menu-icon" onClick={()=>setClicked(!clicked)}>
                    <i className={clicked ?'fas fa-times':"fas fa-bars"}></i>

                </div>
                <ul className={clicked ?'nav-menu active':'nav-menu' }>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a> 
                            </li>

                        )
                    })}
                    
                </ul>
            </nav>

        );
    }


