import React from 'react'

const Card = ({image, title, description}) => {
  return (
    <div className="CardMember">
      <p>{image}</p>
      <h2>{title}</h2>
      <p>{description} </p>
    </div>
  )
}

export default Card
