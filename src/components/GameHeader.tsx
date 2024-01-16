import { Game } from "../types/game"

interface GameHeaderProps {
  game: Game
  hintCount: number
}

const GameHeader = ({ game, hintCount }: GameHeaderProps) => {
  return (
    <header className="game_header">
      <p className="game_info">
        ❤️ {game.lives} - 🏆 {game.points} - HintCount: {hintCount}
      </p>
    </header>
  )
}
export default GameHeader
