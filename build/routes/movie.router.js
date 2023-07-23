"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movie_controllers_1 = require("../controllers/movie.controllers");
const router = (0, express_1.Router)();
// validateSessionUser,
router.get('/', movie_controllers_1.getMovies);
router.get('/detail/:id', movie_controllers_1.getMovieById);
router.post('/', movie_controllers_1.createMovie);
router.post('/buy/:userId/movie/:movieId', movie_controllers_1.buyMovie);
exports.default = router;
