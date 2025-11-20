import React, { useState } from "react"
import { Send } from "lucide-react";
import "./Contact.css"
const Call = () => {
    const [form, setform] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });
    const handlechange =(e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };
    const handlesubmit =(e) =>{
        e.preventDefault();
        console.log("form submitted:",form);
        alert("your message has been submitted!");
    };
    return(
        <>
        <div className="Contact-header">
            <h1>Get in<span>Touch</span></h1>
            <p>Ready to start your next project? We'd love to hear from you.  
        Fill out the form below or reach out directly.</p>
        </div>
         <div className="contact-form-box">
        <form onSubmit={handlesubmit} className="contact-form">
         <h1>Send us a Message</h1>
        <label>Your Name *</label>
        <input type="text" name="name" placeholder="John Doe" value={form.name} onChange={handlechange}/>
        <label>Email Address *</label>
        <input type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handlechange}/>
        <label>Phone Number *</label>
        <input type="text" name="phone" placeholder="+1 (555) 123-4567" value={form.phone} onChange={handlechange}/>
        <div className="full-width">
            <label>Service Needed *</label>
            <input type="text" name="service"placeholder="e.g., Web Development" value={form.service} onChange={handlechange} />
        </div>
        <br />
        <textarea name="message" placeholder="Share a brief description of your requirements.." value={form.message} onChange={handlechange}>required</textarea>
       <div className="submit">
          <button type="submit" className="send-btn">
        <Send className="icon" />
         SEND MESSAGE</button>
       </div>
        </form>
     </div>
    </>
 );
};
export default Call