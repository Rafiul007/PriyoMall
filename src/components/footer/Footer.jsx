import React from 'react'
import './Footer.css'
import footer_logo from "../../assets/logo_big.png"
import ig_icon from "../../assets/instagram_icon.png"
import pin_icon from "../../assets/pintester_icon.png"
import wt_icon from "../../assets/whatsapp_icon.png"
function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>PriyoMall</p>
            </div>
            <ul className="footer-link">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contract</li>
                <li>Career</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <a href="#"><img src={ig_icon} alt="" /></a>
                </div>
                <div className="footer-icons-container">
                    <a href="#"><img src={pin_icon} alt="" /></a>

                </div>
                <div className="footer-icons-container">
                    <a href="#"><img src={wt_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer