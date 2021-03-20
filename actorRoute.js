const express = require("express");
const router = express.Router();

// Require Controllers from actorController
const {
    actorCreate,
    actorList,
    actorListId,
  } = require("../controllers/actorController")

// Actor Create Route
router.post("/", actorCreate)

// Actor List Route
router.get("/", actorList)

// Actor List Route
router.get("/:actorId", actorListId)

module.exports = router;