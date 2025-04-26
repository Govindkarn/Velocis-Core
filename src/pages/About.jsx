import React from 'react'
import AboutCard from './../components/AboutCard';
import { FaBullseye, FaEye, FaHandsHelping } from 'react-icons/fa';

const aboutData = [
  {
    name: "MISSION",
    func: "At Velocis Core, we deliver dependable IT solutions that help businesses grow and succeed, with a focus on quality, efficiency, and customer satisfaction.",
    logo: <FaBullseye />
  },
  {
    name: "VISION",
    func: "At Velocis Core, we aim to be a trusted partner in digital transformation, empowering businesses through innovative technology and exceptional service.",
    logo: <FaEye />
  },
  {
    name: "VALUES",
    func: "At Velocis Core, we value integrity, innovation, and collaboration. We are dedicated to creating solutions that make a positive impact for our clients and communities.",
    logo: <FaHandsHelping />
  }];

const About = () => {
  return (
    <div className='about'>
      <div className="aboutus">
        <div className="aboutimage"></div>
        <div className="aboutcontent">
          <p>About Us</p>
          <h2>Empowering Your Business Through Technology</h2>
          <p>At Velocis Core, we specialize in transforming ideas into innovative solutions. Our expertise spans app development, web development, social media management, and IT consulting, ensuring that your business stays ahead in a digital-first world.</p>
          <p>With a commitment to excellence and a customer-centric approach, we help you navigate the complexities of technology to achieve your goals efficiently and effectively.</p>
          <div className="support">
            <div className="row1">
              <p><i class="fa-solid fa-check"></i> Innovative App Development</p>
              <p><i class="fa-solid fa-check"></i> Skilled Professionals</p>
            </div>
            <div className="row2">
              <p><i class="fa-solid fa-check"></i> Custom Web Solutions</p>
              <p><i class="fa-solid fa-check"></i> Expert IT Consulting</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutMembers">
        {aboutData.map((aboutMembers, index) => (
          <AboutCard
            key={index}
            logo={aboutMembers.logo}
            title={aboutMembers.name}
            description={aboutMembers.func} />
        ))}
      </div>
    </div>
  )
}

export default About
