import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

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

app.get('/', (req, res) => {
  res.send('Welcome to my Movies API! Endpoints available: /movies, /movies/:movieId')
})

app.get("/movies", (req, res) => {
  res.send(moviesData)
})

app.get("/movies/:movieId", (req, res) => {
  const moviesIdList = moviesData.map(movie => movie.id).join(", ");

  const idToFind = Number(req.params.movieId);
  const movie = moviesData.find((movie) => Number(movie.id) === idToFind);
  if (!movie) {
    return res.status(404).send(`Movie not found. Please, select an ID in the list below.<br>IDs: ${moviesIdList}`);
  }
  res.status(200).send(movie);
});

app.post("/movies", (req, res) => {
  const newMovie = req.body;
  moviesData.push(newMovie);
  res.send(`movie added successfully!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})