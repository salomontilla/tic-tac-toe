import { useState } from 'react'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { TURNS } from './constants'
import { checkWinner } from './logic/checkWinner'




function App() {
  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(
    () => {
      const turnFromStorage = window.localStorage.getItem('turn')
      return turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.X
    }
  )

  const [winner, setWinner] = useState<string>('')

  
  
  function updateBoard(index: number) {
    if (board[index] || winner) return
    const newBoard = [...board]
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    newBoard[index] = turn
    setBoard(newBoard)
    setTurn(newTurn)
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(newTurn))
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
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={empezarDeNuevo}>Empezar de nuevo</button>
      <section className="game">
        {
          board.map((_:number, index:number) => {
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
