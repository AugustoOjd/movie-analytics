"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_table_1 = require("../db/models/movie.table");
const soldHistory_table_1 = require("../db/models/soldHistory.table");
const user_table_1 = require("../db/models/user.table");
const customError_model_1 = __importDefault(require("../models/customError.model"));
const movie_model_1 = __importDefault(require("../models/movie.model"));
const soldHistory_model_1 = __importDefault(require("../models/soldHistory.model"));
class MovieService {
    constructor() {
        this.movieModel = new movie_model_1.default();
        this.soldHistoryModel = new soldHistory_model_1.default();
    }
    getMovies(skip, limit, category, query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (category) {
                    if (query) {
                        const movie = yield movie_table_1.Movie.findAll({
                            where: {
                                category: category,
                                premium: query
                            },
                            offset: skip,
                            limit: limit
                        });
                        return movie;
                    }
                    const movie = yield movie_table_1.Movie.findAll({
                        where: {
                            category: category
                        },
                        offset: skip,
                        limit: limit
                    });
                    return movie;
                }
                if (query) {
                    const movie = yield movie_table_1.Movie.findAll({
                        where: {
                            premium: query
                        },
                        offset: skip,
                        limit: limit
                    });
                    return movie;
                }
                const movies = yield movie_table_1.Movie.findAll({
                    offset: skip,
                    limit: limit
                });
                if (!movies)
                    throw new customError_model_1.default('internal error', 500, 'error get all movies', true);
                return movies;
            }
            catch (error) {
                throw error;
            }
        });
    }
    createFreeMovie(title, description, category, release, image, duration, seasons) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!title || !description || !category || !release || !image || !duration || !seasons)
                    throw new customError_model_1.default('client error', 404, 'inputs are require', true);
                const newFreeMovie = this.movieModel.createFreeMovie(title, description, category, release, image, duration, seasons);
                if (!newFreeMovie)
                    throw new customError_model_1.default('internal error', 500, 'model free movie error', true);
                yield movie_table_1.Movie.create(Object.assign({}, newFreeMovie));
                return newFreeMovie;
            }
            catch (error) {
                throw error;
            }
        });
    }
    createPremiumMovie(title, description, price, category, release, image, duration, seasons) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!title || !description || !price || !category || !release || !image || !duration || !seasons)
                    throw new customError_model_1.default('client error', 404, 'inputs are require', true);
                const newPremiumMovie = this.movieModel.createPremiumMovie(title, description, price, category, release, image, duration, seasons);
                if (!newPremiumMovie)
                    throw new customError_model_1.default('internal error', 500, 'model free movie error', true);
                yield movie_table_1.Movie.create(Object.assign({}, newPremiumMovie));
                return newPremiumMovie;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getMovieById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id)
                    throw new customError_model_1.default('client error', 404, 'id undefined', false);
                const movie = yield movie_table_1.Movie.findByPk(id);
                if (!movie)
                    throw new customError_model_1.default('client error', 404, 'id not found', false);
                return movie;
            }
            catch (error) {
                throw error;
            }
        });
    }
    buyMovie(userId, movieId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_table_1.User.findByPk(userId);
                if (!user)
                    throw new customError_model_1.default('client error', 404, 'invalid user id', false);
                const movie = yield movie_table_1.Movie.findByPk(movieId);
                if (!movie)
                    throw new customError_model_1.default('client error', 404, 'movie id not found', false);
                const sold = this.soldHistoryModel.setSoldHistory(userId, movieId);
                yield soldHistory_table_1.SoldHistory.create(Object.assign({}, sold));
                return sold;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateMovie() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    deleteMovie() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = MovieService;
