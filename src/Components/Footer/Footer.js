import React from "react";
import './Footer.css'

const Footer=()=>{
    return(
        <div className="footer">
        <div className="para">
            <p>® 2022 Shadi ALhamdo - All Rights Reserved.</p>
        </div>
        <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i class="fa-solid fa-envelope"></i>
            <i class="fa-brands fa-whatsapp"></i>
        </div>
        </div>
    );
}

export default Footer;