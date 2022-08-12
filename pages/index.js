import { useState } from "react";
import Card from './card';

const cardImages = [
  { "src": "/img/icons-swords.jpg" },
  { "src": "/img/icons-hammer.jpg" },
  { "src": "/img/icons-axe.jpg" },
  { "src": "/img/icons-shield.jpg" },
  { "src": "/img/icons-helmet.jpg" },
  { "src": "/img/icons-banner.jpg" }
]

export default function Home() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledDeck = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random()
      }))

    setCards(shuffledDeck)
    setTurns(0)
  }

  return (
    <div className="">
      <h1>Let's Play a Guessing Game!</h1>
      <p>How good is your memory?</p>
      <button type="button" onClick={shuffleCards}>Start a New Game?</button>

      <div className="grid">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
