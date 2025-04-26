import React from 'react'
import TeamCard from './../components/TeamCard';
import Image1 from '../assets/images/nirajan.jpg'
import Image2 from '../assets/images/pujan.jpg'
import Image3 from '../assets/images/crpoudyal.png'
import Image4 from '../assets/images/rahul.png'
import Image5 from '../assets/images/sanjit-pudasain.png'
import Image6 from '../assets/images/pramod.png'


const teamData = [
  {name:"Nirajan Dahal", position:"Chief Technology", image:Image1},
  {name:"Pujan Paneru", position:"Sr.MERN Stack ", image:Image2},
  {name:"Chudaraj Poudel", position:"Mobile App Developer", image:Image3},
  {name:"Rahul Mukhiya", position:"Mobile App Developer", image:Image4},
  {name:"Sajit Pudasain", position:"PHP Intern", image:Image5},
  {name:"Pramod Mehta", position:"Pramod Mehta", image:Image6}
];

const Team = () => {
  return (
    <div>
      <div className="teamheading">
        <p>Our Team</p>
        <h2>Meet Our Experienced Team Members</h2>
      </div>
      <div className="teamMembers">
        {teamData.map((teamMembers, index) => (
          <TeamCard
            key={index}
            image={teamMembers.image}
            title={teamMembers.name}
            description={teamMembers.position} />
        ))}
      </div>
    </div>
  )
}

export default Team
