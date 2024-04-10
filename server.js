import express from 'express'

const app = express()
const PORT = 3000

const moviesData = [
  {
    id: 1,
    title: "The Godfather",
    certificate: "18",
    yearOfRelease: 1972,
    director: "Francis Ford Coppola",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    certificate: "15",
    yearOfRelease: 1994,
    director: "Frank Darabont",
  },
  {
    id: 3,
    title: "Schindler's List",
    certificate: "15",
    yearOfRelease: 1993,
    director: "Steven Spielberg",
  },
];

const movieBiggestId = moviesData.reduce((acc, movie) => {
  if (movie.id > acc) {
    return movie.id;
  }
  return acc;
}, 0 )

app.get('/', (req, res) => {
  res.send('Welcome to my Movies API! Endpoints available: /movies, /movies/:movieId')
})

app.get("/movies", (req, res) => {
  res.send(moviesData)
})

app.get("/movies/:movieId", (req, res) => {
  const idToFind = Number(req.params.movieId);
  const movie = moviesData.find((movie) => movie.id === idToFind);
  if (!movie) {
    return res.status(404).send(`Movie not found. Please, select a value smaller or equals than ${movieBiggestId}.`);
  }
  res.status(200).send(movie);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})