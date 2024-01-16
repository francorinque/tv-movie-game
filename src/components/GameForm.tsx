interface GameFormprops {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  partial: string
  handleHint: () => void
}

const GameForm = ({ handleSubmit, partial, handleHint }: GameFormprops) => {
  return (
    <form className="game_form" onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        readOnly
        placeholder={partial}
        className="game_input"
      />
      <div className="game_input-field">
        <input
          type="text"
          className="game_input"
          name="partial"
          placeholder="Enter a  name"
          autoFocus
        />
        <button className="game_btn btn-gradient">Guess</button>
      </div>

      <button className="game_btn" type="button" onClick={handleHint}>
        Show Hint
      </button>
    </form>
  )
}
export default GameForm
