import express from 'express'

const app = express()
const PORT = 3000

const movies = [
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
  res.send('Welcome to my Movies API! Endpoints available: /movies')
})

app.get("/movies", (req, res) => {
  res.send(movies)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})