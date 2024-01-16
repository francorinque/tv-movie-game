import { useEffect, useMemo, useState } from "react"

import getRandomMovie from "../utils/getMovie"
import getPartialName from "../utils/getPartialName"
import toast from "react-hot-toast"
import confetti from "canvas-confetti"

import { Game } from "../types/game"

function useGame() {
  const [game, setGame] = useState<Game>({
    lives: 3,
    points: 0,
    movie: null,
  })
  const [showHint, setShowHint] = useState(false)
  const [hintCount, setHintCount] = useState(0)

  const partial = useMemo(() => {
    if (!game.movie) return ""
    return getPartialName(game.movie)
  }, [game.movie])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const guess = formData.get("partial")?.toString() as string

    if (!guess.length) return toast.error("Please enter a  movie name")
    else if (
      guess.toLocaleLowerCase() ===
      game.movie?.original_name.toLocaleLowerCase()
    ) {
      toast.success("Correct!")
      confetti({
        spread: 200,
        particleCount: 100,
      })
      setGame((prev) => ({ ...prev, points: prev.points + 1 }))
    } else {
      toast.error("Incorrect!")
      setGame((prev) => ({ ...prev, lives: prev.lives - 1 }))
    }

    setShowHint(false)
    form.reset()
  }

  function handleReset() {
    setGame({
      lives: 3,
      points: 0,
      movie: null,
    })
    setHintCount(0)
  }

  function handleHint() {
    if (!showHint) {
      setHintCount((prev) => prev + 1)
    }
    setShowHint(true)
  }

  // get random movie
  useEffect(() => {
    getRandomMovie().then((data) =>
      setGame((prev) => ({ ...prev, movie: data }))
    )
  }, [game.lives, game.points])

  return {
    game,
    partial,
    handleSubmit,
    handleHint,
    showHint,
    handleReset,
    hintCount,
  }
}

export default useGame
