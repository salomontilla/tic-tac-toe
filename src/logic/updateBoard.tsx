import { useState } from 'react'
import { TURNS } from '../constants'
import { checkWinner } from './checkWinner'




export  function updateBoard(index: number) {
    const [board, setBoard] = useState(Array(9).fill(null))
    
    const [turn, setTurn] = useState(TURNS.X)
    
    const [winner, setWinner] = useState<string>('')
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
export function empezarDeNuevo() {
    const [board, setBoard] = useState(Array(9).fill(null))
    
    const [turn, setTurn] = useState(TURNS.X)
    
    const [winner, setWinner] = useState<string>('')
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner('')
  }