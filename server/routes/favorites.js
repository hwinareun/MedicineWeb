const express = require('express');
const router = express.Router();
const {
    getFavorites,
    addFavorite,
    removeFavorite
} = require('../controllers/favoriteController');

router.get('/', getFavorites);
router.post('/:drugId', addFavorite);
router.delete('/:drugId', removeFavorite);

module.exports = router;