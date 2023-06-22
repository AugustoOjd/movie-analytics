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
const customError_model_1 = __importDefault(require("../models/customError.model"));
const movie_model_1 = __importDefault(require("../models/movie.model"));
class MovieService {
    constructor() {
        this.movieModel = new movie_model_1.default();
    }
    getMovies(skip, limit, category, query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!category) {
                    if (query == '1') {
                        const movies = yield movie_table_1.Movie.findAll({
                            where: {
                                premium: true
                            },
                            offset: skip,
                            limit: limit
                        });
                        if (!movies)
                            throw new customError_model_1.default('internal error', 500, 'error get movies with category and premium true', true);
                        return movies;
                    }
                    else {
                        const movies = yield movie_table_1.Movie.findAll({
                            where: {
                                premium: false
                            },
                            offset: skip,
                            limit: limit
                        });
                        if (!movies)
                            throw new customError_model_1.default('internal error', 500, 'error get movies with category and premium false', true);
                        return movies;
                    }
                }
                if (!query) {
                    if (category) {
                        const movies = yield movie_table_1.Movie.findAll({
                            where: {
                                category: category
                            },
                            offset: skip,
                            limit: limit
                        });
                        if (!movies)
                            throw new customError_model_1.default('internal error', 500, 'error get movies with category witout query', true);
                        return movies;
                    }
                    else {
                        const movies = yield movie_table_1.Movie.findAll({
                            offset: skip,
                            limit: limit
                        });
                        if (!movies)
                            throw new customError_model_1.default('internal error', 500, 'error get movies with query without category', true);
                        return movies;
                    }
                }
                if (!category || !query) {
                    const movies = yield movie_table_1.Movie.findAll({
                        offset: skip,
                        limit: limit
                    });
                    if (!movies)
                        throw new customError_model_1.default('internal error', 500, 'error get movies without category and query', true);
                    return movies;
                }
                const movies = yield movie_table_1.Movie.findAll({
                    where: {
                        category: category,
                    },
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
    getMovieById() {
        return __awaiter(this, void 0, void 0, function* () {
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