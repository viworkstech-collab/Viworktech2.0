import React from "react"
import Call from "../components/Contact1.jsx";
import Info from "../components/Contact2.jsx";
import "../components/Contact.css";
export default function Contact(){
    return(
        <div className="contact-wrapper">
        <div className="left-column">
            < Call />
        </div>
        <div className="right-column">
            < Info />
        </div>
     </div>
    )
}