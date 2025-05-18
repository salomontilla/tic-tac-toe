import { useState } from 'react'

const TURNS = {
  X: 'X',
  O: 'O'
}

const board = Array(9).fill(null)

type Square = {
  children: string
  value: string
  onClick: () => void
}

function Square({ children, value, onClick }: Square) {
  return (
    <button className='square' onClick={onClick}>
      {children}
    </button>
  )
}
function App() {

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                value={board[index]}
                onClick={() => {}}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
