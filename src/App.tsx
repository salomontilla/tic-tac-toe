import { useState } from 'react'

const TURNS = {
  X: 'X',
  O: 'O'
}


type Square = {
  children?: string
  value?: string
  isSelected?: boolean
  updateBoard?: (index:number) => void
  index?: number
}

function Square({ children, isSelected, updateBoard, index }: Square) {
  const classname = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    if (updateBoard && index !== undefined) {
      updateBoard(index)
    }
  }

  return (
    <div className={classname} onClick={handleClick}>
      {children}
    </div>
  )
}


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  
  function updateBoard(index: number) {
    if (board[index]) return
    const newBoard = [...board]
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    newBoard[index] = turn
    setBoard(newBoard)
    setTurn(newTurn)
  }
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                value={board[index]}
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
