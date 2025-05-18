type Square = {
  children?: string
  value?: string
  isSelected?: boolean
  updateBoard?: (index:number) => void
  index?: number
}

export function Square({ children, isSelected, updateBoard, index }: Square) {
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