import { Movie } from "../types/game"

async function getRandomMovie(): Promise<Movie> {
  const results = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=2",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    }
  ).then((res) => res.json())

  const firstMovie =
    results.results[Math.floor(Math.random() * results.results.length)]
  return firstMovie
}

export default getRandomMovie
