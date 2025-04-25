import React from 'react'

const Contact = () => {
    return (
        <div className='main'>
            <div className="conc">
                <h1>CONTACT US</h1>
                <p>If You Have Any Query, Plaese Contact Us</p>
            </div>
            <div className="contacts">
                <div className="call">
                    <i className="fa fa-phone-alt" />
                    <h2>CALL US</h2>
                    <p>+977 9852079737</p>
                </div>
                <div className="location">
                    <i className="fa fa-map-marker-alt" />
                    <h2>OFFICE LOCATION</h2>
                    <p>Hanuman Das Marg, Biratnagar</p>
                </div>
                <div className="email">
                    <i class="fa-solid fa-globe"></i>
                    <h2>EMAIL</h2>
                    <p>contact@velociscore.com</p>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3571.938136096418!2d87.280028!3d26.457723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef74473a64d13b%3A0x64bafdce8a4eeb50!2sCA.%20Piyush%20Lunia%2C%20P.%20Lunia%20%26%20Associates!5e0!3m2!1sen!2snp!4v1738480925688!5m2!1sen!2snp" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    )
}

export default Contact
