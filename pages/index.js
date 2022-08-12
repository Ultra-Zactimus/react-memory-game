import { useState } from "react";
import Card from './card';

const cardImages = [
  { "src": "/img/icons-swords" },
  { "src": "/img/icons-hammer" },
  { "src": "/img/icons-axe" },
  { "src": "/img/icons-shield" },
  { "src": "/img/icons-helmet" },
  { "src": "/img/icons-scroll" }
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
