import React from 'react'

const TeamCard = ({image, title, description}) => {
  return (
    <div className="teamMember">
      <div className="photo">
      <img src={image} alt={title}></img>
      </div>
      <div className="introduction">
      <h2>{title}</h2>
      <p>{description} </p>
      </div>
    </div>
  )
}

export default TeamCard
