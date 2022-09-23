import React from 'react';
import Image from 'next/image';

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ""}>
        <div className="front images">
          <Image
            src={card.src}
            alt="card front"
            width={400}
            height={400}
          />
        </div>
        <div className="back image">
          <Image
            src="/img/icons-back.jpg"
            alt="card back"
            onClick={handleClick}
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

export default Card