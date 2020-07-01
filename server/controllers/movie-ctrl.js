var Movie = require("../models/movie-model");

//creates a new movie
createMovie = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a movie",
    });
  }
  //need to check later if changing Movie to movies still works or not
  const movie = new Movie(body);
  if (!movie) {
    return res.status(400).json({ success: false, error: err });
  }

  movie.save
    .then(() => {
      return res.status(201).json({
        success: true,
        id: movie._id,
        message: "Movie created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Movie not created!",
      });
    });
};

//updates the data of a movie
