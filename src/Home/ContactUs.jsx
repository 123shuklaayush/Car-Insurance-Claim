import React from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Help from "./../banner/help.jpg"
import "./ContactUs.css";
function ContactUs() {
  return (
    <div className="contact-us">
      <div className="left">
      <h2 style={{padding:"20px"}}>Contact Us</h2>
      <p className="contact-para">
          Our friendly customer support team is your extended family. Speak your
          heart out. They listen with undivided attention to resolve your
          concerns. Give us a call, request a callback or drop us an email, we'
          re here to help. 
        </p>
      <div className="contact-1">
        <div className="img-logo">
            <TelegramIcon/>
        </div>
        <div className="support-section">
        <h5>General Enquries</h5>
        <p>care@policy.com</p>
        </div>
      </div>

      <div className="contact-2">
        <div className="img-logo">
            <HeadsetMicIcon/>
        </div>
        <div className="support-section">
        <h5>Customer Sales Enquiries</h5>
        <p> 1800 - 200 - 2300- 101</p>
        </div>
      </div>
      </div>
      <div className="right">
        <img src={Help} alt="" />
      </div>
    </div>
  );
}

export default ContactUs;
