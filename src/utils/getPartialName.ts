import { Movie } from "../types/game"

function getPartialName(movie: Movie) {
  const limit = Math.floor(movie.original_name.length / 2)

  const indexes = Array.from(
    { length: movie.original_name.length },
    (_, index) => index
  )
    .sort((index, b) =>
      movie.original_name[index] === "" ? 1 : Math.random() >= 0.5 ? 1 : -1
    )
    .slice(0, limit)

  return movie.original_name.split("").reduce((name, letter, index) => {
    name = name.concat(indexes.includes(index) ? "_" : letter)

    return name
  }, "")
}

export default getPartialName
