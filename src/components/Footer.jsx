import React from 'react'
import Logo from '../assets/images/logo.png'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="section">
                    <div className="section-1">
                        <img src={Logo} alt="" />
                        <p>We are dedicated to delivering innovative solutions to help you achieve your business goals. Partner with us for excellence and growth.</p>
                    </div>
                    <div className="section-2">
                        <h3>Get In Touch</h3>
                        <ul>
                            <li><i className="fa fa-map-marker-alt" /> Himalayan Road, Biratnagar</li>
                            <li><i className="fa fa-phone-alt" /> +977 9852079737</li>
                            <li><i className="fa fa-envelope" /> info@velociscore.com</li>
                        </ul>
                        <div className="footer-social">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-instagram" /></a>
                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    <div className="section-3">
                        <h3>Polular Links</h3>
                        <ul>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Contact Us</a></li>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="section-4">
                        <h3>Our Services</h3>
                        <ul>
                            <li>Web Development</li>
                            <li>App Development</li>
                            <li>Social Media Management</li>
                            <li>IT Consulting</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p className='copy'>©<a href="https://www.velociscore.com/"> Velocis Core,</a> 2025 All Right Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
