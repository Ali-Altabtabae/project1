"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    static associate(models) {
      // define association here
    }
  }
  Actor.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Actor",
    }
  );
  return Actor;
};
