import { useState } from 'react'
import './App.css'

const TURNS = {
  X : 'x',
  O : 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) // null es que no hay ganador, false es que hay un empate


  const checkWinner = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras 
    // para ver si X u O ganó
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a] && // 0 -> x u o
        boardToCheck[a] === boardToCheck[b] && // 0 y 3 -> x -> x u o
        boardToCheck[a] === boardToCheck[c] // si para todas las posiciones ganadoras son todo x o todos o, hay ganador
      ){
        return boardToCheck[a] // x u o
      }
    }
    return null

  }

  const updateBoard = (index) => {

    // no actualizamos esta posicion si ya tiene algo
    if(board[index]) return
    
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn // x u o
    setBoard(newBoard)
    
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }


  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return ( 
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
          </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
          </Square>
      </section>
    </main>
  
  )
}

export default App
