import { Toaster } from "react-hot-toast"
import { GameForm, GameHeader } from "."

import useGame from "../hooks/useGame"

const GameInfo = () => {
  const {
    game,
    partial,
    handleSubmit,
    handleHint,
    showHint,
    handleReset,
    hintCount,
  } = useGame()

  return (
    <>
      <GameHeader game={game} hintCount={hintCount} />
      <Toaster position="top-right" />
      {!game.movie ? (
        <div className="loader"></div>
      ) : game.lives < 1 ? (
        <div className="game_over-wrapper">
          <h2>Game Over</h2>
          <button onClick={handleReset} className="game_btn">
            Try Again
          </button>
        </div>
      ) : (
        <GameForm
          handleSubmit={handleSubmit}
          partial={partial}
          handleHint={handleHint}
        />
      )}
      {showHint && <p className="game_hint">{game.movie?.overview}</p>}
    </>
  )
}
export default GameInfo
