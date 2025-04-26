import React from 'react'
import Card from './../components/Card';

import { FaMobileAlt, FaGlobe, FaChartLine, FaLightbulb, FaPaintBrush, FaPencilRuler, FaPenNib, FaBullhorn } from 'react-icons/fa';



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
  },
  {
    name: "UI/UX Design",
    func: "User-centric design solutions that enhance user experience and interface, making your applications intuitive.",
    image: <FaPaintBrush />
  },
  {
    name: "Graphic Design",
    func: "Creative graphic design services to build your brand identity and make a lasting impression.",
    image: <FaPencilRuler />
  },
  {
    name: "Content Creation",
    func: "Engaging content creation that captivates your audience and enhances your online presence.",
    image: <FaPenNib />
  },
  {
    name: "Digital Marketing",
    func: "Comprehensive digital marketing strategies that boost your brand’s visibility and drive traffic.",
    image: <FaBullhorn />
  }
];


const Services = () => {
  return (
    <div>
      <div className="heading">
        <p>Our Services</p>
        <h2>Exceptional IT Solutions For Your Business</h2>
        <p>At Velocis Core, we offer a range of IT services designed to enhance your business efficiency and drive growth. Explore our Expertise below.</p>
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
  )
}

export default Services
