
const cardImages = [
  { "src": "/img/icons-swords" },
  { "src": "/img/icons-hammer" },
  { "src": "/img/icons-axe" },
  { "src": "/img/icons-shield" },
  { "src": "/img/icons-helmet" },
  { "src": "/img/icons-scroll" }
]

export default function Home() {

  const shuffleCards = () => {
    const shuffledDeck = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random()
      }));
  }

  return (
    <div className="">
      <h1>Let's Play a Guessing Game!</h1>
      <p>How good is your memory?</p>
      <button>Start a New Game?</button>
    </div>
  )
}
