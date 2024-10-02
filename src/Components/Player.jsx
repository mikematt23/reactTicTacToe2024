import { useState } from "react"

const Player = (props)=>{
 const [playerName, setPlayerName] = useState(props.player)
 const [isEditing, setIsEditing] = useState(false)

 const handleButtonClick = ()=>{
    setIsEditing((editing)=>{
      return editing = !isEditing
    })
    
 }
 const handleNameChange = (event)=>{
  setPlayerName(event.target.value)
 }
 return( <li>
    <span className="player">
      {!isEditing &&<span className="player-name">{playerName}</span>}
      {isEditing && <input onChange={handleNameChange} placeholder={props.player}></input>}
      <span className="player-symbol">{props.symbol}</span>
    </span>
    {!isEditing && <button onClick={handleButtonClick}>Edit</button>}
    {isEditing && <button onClick={handleButtonClick}>Save</button>}
  </li>)
}

export default Player