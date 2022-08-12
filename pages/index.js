import { useEffect, useState } from "react";
import Card from '../components/Card';

const cardImages = [
  { "src": "/img/icons-swords.jpg", matched: false },
  { "src": "/img/icons-hammer.jpg", matched: false },
  { "src": "/img/icons-axe.jpg", matched: false },
  { "src": "/img/icons-shield.jpg", matched: false },
  { "src": "/img/icons-helmet.jpg", matched: false },
  { "src": "/img/icons-banner.jpg", matched: false }
]

export default function Home() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);

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

  const handleChoice = card => {
    firstPick ? setSecondPick(card) : setFirstPick(card)
  }

  useEffect(() => {
    if (firstPick && secondPick) {
      if (firstPick.src === secondPick.src) {
        setCards(prev => {
          return prev.map(card => {
            if (card.src === firstPick.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        resetTurn()
      }
    }
  }, [firstPick, secondPick])

  const resetTurn = () => {
    setFirstPick(null)
    setSecondPick(null)
    setTurns(prev => prev + 1)
  }

  return (
    <div className="">
      <h1>Let's Play a Guessing Game!</h1>
      <p>How good is your memory?</p>
      <button type="button" onClick={shuffleCards}>Start a New Game?</button>

      <div className="grid">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  )
}
