const { Actor, Movie } = require("../db/models");

// Actor List Controller
exports.actorList = async (_, res) => {
  try {
    const actors = await Actor.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "movieName"] },
      include: {
        model: Movie,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    });

    console.log("Fetched actors", actors);
    res.status(200).json(actors);
  } catch (error) {
    console("Failed to get actors", error);
  }
};

exports.actorListId = async (req, res) => {
  try {
    const actors = await Actor.findByPk(req.params.actorId, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Movie,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    });

    console.log("Fetched actors", actors);
    res.status(200).json(actors);
  } catch (error) {
    console.log("Failed to get actors", error);
  }
};

// Actor Create Controller
exports.actorCreate = async (req, res) => {
  try {
    const movie = await Movie.findOne({
      where: {
        name: req.body.movie,
      },
    });

    const newActor = await Actor.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      movieName: movie.id,
    });

    console.log("Create Actor", newActor);
    res.status(201).json(newActor);
  } catch (error) {
    console.log("Faild to create actors", error);
  }
};
