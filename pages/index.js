import { useEffect, useState } from "react";
import Head from 'next/head';
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
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledDeck = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random()
      }))
    setFirstPick(null)
    setSecondPick(null)
    setCards(shuffledDeck)
    setTurns(0)
  }

  const handleChoice = card => {
    firstPick ? setSecondPick(card) : setFirstPick(card)
  }

  useEffect(() => {
    if (firstPick && secondPick) {
      setDisabled(true)

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
        setTimeout(() => resetTurn(), 500)
      }
    }
  }, [firstPick, secondPick])

  const resetTurn = () => {
    setFirstPick(null)
    setSecondPick(null)
    setTurns(prev => prev + 1)
    setDisabled(false)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div>
      <Head>
        <title>Memory Game</title>
        <meta name="description" content="This is a memory card game. Test your skills!" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1>Let&apos;s Play a Guessing Game!</h1>
        <button type="button" onClick={shuffleCards}>New Game?</button>

        <div className="grid">
          {cards.map(card => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === firstPick || card === secondPick || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <p>Turns Taken: {turns}</p>
      </div>
    </div>
  )
}
