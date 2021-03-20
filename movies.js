module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Test", {
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
      },
    });
  };