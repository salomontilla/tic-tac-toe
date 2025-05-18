import { useState } from 'react'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { TURNS } from './constants'
import { checkWinner } from './logic/checkWinner'




function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState<string>('')

  
  
  function updateBoard(index: number) {
    if (board[index] || winner) return
    const newBoard = [...board]
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    newBoard[index] = turn
    setBoard(newBoard)
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }else if (newBoard.every(square => square !== null)) {
      setWinner('tie')
    }
  }

  function empezarDeNuevo() {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner('')
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
      
        <WinnerModal
          winner={winner}
          resetGame={empezarDeNuevo}/>
      
    </main>
  )
}

export default App
