import React from "react";
import "./Contact.css"
import icon from "./images/insta.png";
import wicon from "./images/wbicon.png";
import facebook from "./images/fbicon.png";
import email from "./images/email.png";
import phone from "./images/phone.png";

function Contact() {
    return (
      <div className="contact">
        <h2>Contact us</h2>
        <div className="insta-logo">
          <a href={"https://www.instagram.com/karangupta_2123?igsh=d2FzdjNham96Y2l2"}>
          <img src={icon}  alt="insta.png" />
          </a>
          <span><b>Instagram</b></span>
          <p>karangupta_2123</p>
        </div>

        <div className="wa-logo">
          <a href={"https://wa.me/918097677166"}>
          <img src={wicon}  alt="wbicon.png" />
          </a>
          <span><b>Whatsapp</b></span>
          <p>Karan Gupta</p>
        </div>

        <div className="fb-logo">
          <a href={"https://www.facebook.com/profile.php?id=100093429190182&mibextid=ZbWKwL"}>
            <img src={facebook} alt="fbicon.png"/>
          </a>
          <span><b>Facebook</b></span>
          <p>Karan Gupta</p>
        </div>

        <div className="email-logo">
          <a href={"mailto:guptakaran0601@gmail.com"}>
            <img src={email} alt="email.png"/>
          </a>
          <span><b>Email</b></span>
          <p>guptakaran0601@gmail.com</p>
        </div>

        <div className="phone-logo">
          <a href={"tel:+918097677166"}>
            <img src={phone} alt="phone.png"/>
          </a>
          <span><b>Phone</b></span>
          <p>8097677166</p>
        </div>
        
      </div>
    );
  }
  
  export default Contact;
  