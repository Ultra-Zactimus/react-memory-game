import React from 'react'

const Card = ({ card }) => {
  return (
    <div className='card' key={card.id}>
      <img className="front" src={card.src} alt="card front" />
      <img className="back" src="/img/icons-back.jpg" alt="card back" />
    </div>
  )
}

export default Card