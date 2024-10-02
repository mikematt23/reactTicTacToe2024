

const GameBoard = (props)=>{
  const initialGameBoard =[
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]

  return(
    <ol id ="game-board">
      {initialGameBoard.map((row,rowIndex)=>{
        return <li key={rowIndex}>
          <ol>
            {row.map((col,colIndex)=>{
              
            })}
          </ol>
        </li>
      })}
    </ol>
  )
}

export default GameBoard