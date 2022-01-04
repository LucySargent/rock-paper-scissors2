import { useEffect, useState } from 'react'

const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  
  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  useEffect(() => {
      switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
          setResult('YOU WIN!')
          break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
          setResult('YOU LOSE!')
          break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
          setResult('IT\'S A DRAW!')
          break
    }
  }, [computerChoice, userChoice])

  return (
    <div>
      <h1>Best of three!</h1>
      <h2>Your choice is: {userChoice}</h2>
      <h2>Computer choice is: {computerChoice}</h2>
      {choices.map((choice, index) =>
        <button key={index} onClick={() => handleClick(choice)}>
          {/* displays the word in button */}
          {choice}
        </button>
      )}
      <h2>{result}</h2>
    </div>
  )
}

export default App
