// Require Movies Data
const { Movie, Actor } = require("../db/models");

// Require Slugify
const slugify = require("slugify");

// Movie List Controller
exports.movieList = async (_, res) => {
  try {
    const movies = await Movie.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Actor,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    });
    console.log("Fetched movies", movies);
    res.status(200).json(movies);
  } catch (error) {
    console.log("Failed to get movies", error);
  }
};

// Movie Create Controller
exports.movieCreate = async (req, res) => {
  try {
    const newMovie = await Movie.create({
      name: req.body.name,
      genre: req.body.genre,
      year: req.body.year,
      // Actor, Image, Rating, Watched (boolean)
    });

    console.log("Create Movie", newMovie);
    res.status(201).json(newMovie);
  } catch (error) {
    console.log("Faild to create movies", error);
  }
};
