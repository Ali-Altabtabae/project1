const express = require("express");
const router = express.Router();

// Require Controllers from movieController
const {
    movieCreate,
    movieList,
  } = require("../controllers/movieController")

// Movie Create Route
router.post("/", movieCreate)

// Movie List Route
router.get("/", movieList)

module.exports = router;
