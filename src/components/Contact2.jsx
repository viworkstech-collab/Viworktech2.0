import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from "lucide-react";
const Info = () => { 
    return (
    <>
        <div className="contact-wrapper">
        <div className="right-column">
        <div className="contactinfo-card">
            <h2 className="contactinfo-title">Contact Information</h2>
            <div className="contactinfo-row">
                <div className="icon-bg email-bg">
                <Mail className="icon" />
                </div>
                <span className="label">EMAIL</span>
                <p className="value">hello@viworkstech.com</p>
            </div>
            <div className="contactinfo-row">
                <div className="icon-bg phone-bg">
                <Phone className="icon" />
            </div>
                <p className="label">PHONE</p>
                <p className="value-phone">+1 (555) 123-4567</p>
            </div>
            <div className="contactinfo-row">
                <div className="icon-bg loaction-bg">
                <MapPin className="icon" />
                </div>
                <p className="label">LOCATION</p>
                <p className="value-location">Bengaluru, Karnataka</p>
            </div>
        </div>
        {/* FOLLOW US */}
        <div className="contactfollow-card">
            <h2 className="contactfollow-title">Follow Us</h2>
            <div className="follow-icon">
                <a href="......" target="-blank" rel="noopener noreferrer">
             <div className="follow-icon-circle linkedin"> 
            <Linkedin className="icon" />
        </div>
        </a>
        <a href="....." target="_blank" rel="noopener noreferrer">
        <div className="follow-icon-circle twitter">
            <Twitter className="icon" />
        </div>
        </a>
        <a href="....." target="_blank" rel="noopener noreferrer">
        <div className="follow-icon-circle instagram">
            <Instagram className="icon" />
        </div>
        </a>
        <a href="....." target="_blank" rel="noopener noreferrer">
        <div className="follow-icon-circle github">
            <Github className="icon" />
        </div>
        </a>
      </div>   
    </div>
    {/* BUSINESS HOURS */}
        <div className="contactbusiness-card">
            <h2 className="contactbusiness-title">Business Hours</h2>
            <div className="row">
                <span>Monday-Friday</span>
                <span>9:00 AM - 6:00 PM</span>
            </div>
            <div className="row">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
            </div>
            <div className="row">
                <span>Sunday</span>
                <span>Closed</span>
            </div>
        </div>
     </div>
 </div>
         </> 
    );
};
export default Info;