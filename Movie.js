"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      // define association here
    }
  }
  Movie.init(
    {
      name: DataTypes.STRING,
      genre: DataTypes.STRING,
      year: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
