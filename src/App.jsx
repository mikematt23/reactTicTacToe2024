import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"

function App() {
  return (
    <main>
      <div id="game-container">
       <ol id="players">
         <Player player ="player 1" symbol = "X"/>
         <Player player ="player 2" symbol = "O"/>
       </ol>

        <GameBoard/>
      </div>
      log
    </main>
  )
}

export default App
