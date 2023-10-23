
import { LOGO_URL } from "../utils/constants";

import { useState,useEffect } from "react";

import { Link } from "react-router-dom";


const Header =() =>{

    // let btnName = "Login";

    const  [btnNameReact,setBtnNameReact] =useState("Login");

    useEffect(() =>{
        console.log("useEffect")
    })


    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src= {LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>

                <li>< Link to="/" > Home </Link> </li> 
                  
                   <li>< Link to="/about" >About us </Link> </li> 
                   <li> <Link to="/contact">Contact Us</Link> </li> 
                   <li> Cart </li> 

                   <button className="login" onClick={()=>{
                    btnNameReact==="login" ? setBtnNameReact("logout") :setBtnNameReact("login");
                    console.log((btnNameReact))
                   }}
                  

                   >{btnNameReact}</button>
                    
                </ul>
            </div>

        </div>
    )
}


export default Header ;