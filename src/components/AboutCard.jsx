import React from 'react'

const AboutCard = ({logo, title, description}) => {
  return (
    <div className="misvis">
      <p>{logo}</p>
      <h2>{title}</h2>
      <p>{description} </p>
    </div>
  )
}

export default AboutCard
