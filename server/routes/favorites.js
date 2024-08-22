const express = require("express");
const router = express.Router();
const {
  getFavorites,
  addFavorite,
  removeFavorite,
} = require("../controllers/favoriteController");
const { authenticateJWT } = require('../middlewares/auth');

router.get("/", authenticateJWT, getFavorites);
router.post("/:drugId", authenticateJWT, addFavorite);
router.delete("/:drugId", authenticateJWT, removeFavorite);

module.exports = router;
