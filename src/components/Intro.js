import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Intro(){
    const defis= useRef(null);
    useEffect(()=>{
        const typed = new Typed(defis.current,{
            strings:[
                "FrontEnd Developer",
                "BackEnd Developer",
                "Software Engineer"
            ],
            startDelay:300,
            backSpeed:100,
            typeSpeed:100,
            backDelay:100,
            smartBackspace:true,
            loop:true,
            showCursor:false
        });
        
    },[]);
    return(
        <div className="container">
            <h3 className="highlight "> Hello ! My name is </h3>
            <h1 className="name">Shreya Shrestha</h1>
            <div className="defis">I am a <span  ref={defis}></span></div>
            <button className="btn intro">View my work</button>
        </div>

    )
}