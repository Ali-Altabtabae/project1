// Requirements
const express = require("express");
const cors = require("cors");
const movieRoute = require("./routes/movieRoute");
const actorRoute = require("./routes/actorRoute");

const db = require("./db/models");
const { Movie, Actor } = require("./db/models");

// Set Express
const app = express();

// Use body-parser
app.use(express.json());

// Use Cors
app.use(cors());

// Use movieRoute
app.use("/movies", movieRoute);

// Use movieRoute
app.use("/actors", actorRoute);

// Get messages in Route "/"
app.get("/", (req, res) => {
  res.json("<h1>Home Page</h1>");
});


// Listen hostlocal:8000
const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
