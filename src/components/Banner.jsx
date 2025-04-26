import React from 'react'

const Banner = ({heading, option, image}) => {
  return (
    <div className="first">
      <div className="introduction">
      <h2>{heading}</h2>
      <p>{option}</p>
      </div>
      <div className="photo">
      <img src={image} alt={title}></img>
      </div>
    </div>
  )
}

export default Banner
