import React from 'react'
import Card from './../components/Card';
import { FaChartLine, FaGlobe, FaLightbulb, FaMobileAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const serviceData = [
  {
    name: "App Development",
    func: "Custom mobile and web applications tailored to meet your business needs and enhance user engagement.",
    image: <FaMobileAlt />
  },
  {
    name: "Web Development",
    func: "Comprehensive web development solutions, ensuring your online presence is impactful and user-friendly.",
    image: <FaGlobe />
  },
  {
    name: "Social Media Management",
    func: "Strategic social media management that enhances brand visibility and engages your audience effectively.",
    image: <FaChartLine />
  },
  {
    name: "IT Consulting",
    func: "Expert IT consulting services to streamline your technology strategy and improve operational efficiency.",
    image: <FaLightbulb />
  }];

const Index = () => {
  return (
    <div>
      <div className="aboutus">
        <div className="aboutimage"></div>
        <div className="aboutcontent">
          <p>About Us</p>
          <h2>Making Your Business Better With Technology</h2>
          <p>Velocis Core is a leading company specializing in web and app development, delivering tailored digital solutions. We also offer expert social media management to enhance brand presence and engagement. Our IT consulting services help businesses use technology effectively to grow and succeed.</p>
          <p>With a focus on innovation and quality, we aim to support our clients in achieving their goals. Velocis Core is your trusted partner for all your digital needs.</p>
          <div className="support">
            <div className="row1">
              <p><i class="fa-solid fa-check"></i> Best Service</p>
              <p><i class="fa-solid fa-check"></i> Skilled Professionals</p>
            </div>
            <div className="row2">
              <p><i class="fa-solid fa-check"></i> 24/7 Support</p>
              <p><i class="fa-solid fa-check"></i> Affordable Prices</p>
            </div>
          </div>
          <button><NavLink to="/about" className={({ isActive}) => (isActive ? "active" : "")}>Read More <i class="fa-solid fa-right-long"/></NavLink></button>
        </div>
      </div>
      <div className="services">
        <div className="servicescontent">
          <p>Our Services</p>
          <h2>Innovative Solutions For Your Business</h2>
          <p>At Velocis Core, we offer a wide range of IT services designed to elevate your business. From web and app development to social media management and IT consulting, we have the expertise to meet your needs.</p>
          <button><NavLink to="/services" className={({ isActive}) => (isActive ? "active" : "")}>View More</NavLink></button>
        </div>
        <div className="serviceMembers">
        {serviceData.map((serviceMembers, index) => (
          <Card
            key={index}
            image={serviceMembers.image}
            title={serviceMembers.name}
            description={serviceMembers.func} />
        ))}
      </div>
      </div>
      <div className="why">
        <div className="choose">
          <p>Why Choose Us</p>
          <h2>Your Trusted Partner In Innovative IT SOlutions</h2>
          <p>At Velocis Core, we combine innovation with expertise, powered by a talented team of developers dedicated to delivering exceptional technology solutions that drive your business forward.</p>
          <p><i class="fa-solid fa-check"></i> Highly skilled developers ready to tackle your challenges</p>
          <p><i class="fa-solid fa-check"></i> Customized solutions tailored to your unique business needs</p>
          <p><i class="fa-solid fa-check"></i> Dedicated support team available 24/7</p>
        </div>
        <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Pba0NML8kF0?si=5MYdrZAKBXw5UKw-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div className="faq">
        <p>Polular FAQs</p>
        <h2>Frequently Asked Questions</h2>
        <div className="rowfirst">
          <h2><button>How do I build a website?</button></h2>
          <h2><button>How long does it takes to create a website?</button></h2>
          <h2><button>Do you only create create HTML Websites?</button></h2>
          <h2><button>Will my website work on mobile devices?</button></h2>
        </div>
        <div className="rowsecond">
          <h2><button>Do you provide website maintainance?</button></h2>
          <h2><button>Dou you have budget-friendly option?</button></h2>
          <h2><button>How do I get started?</button></h2>
          <h2><button>Can you help with SEO?</button></h2>
        </div>
      </div>
    </div>
  )
}

export default Index
