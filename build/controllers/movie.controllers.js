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
exports.getMovieById = exports.createMovie = exports.getMovies = void 0;
const movie_service_1 = __importDefault(require("../services/movie.service"));
const instace = new movie_service_1.default();
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { skip = 0, limit = 50, category, vip } = req.query;
    try {
        const movies = yield instace.getMovies(Number(skip), Number(limit), category === null || category === void 0 ? void 0 : category.toString(), vip);
        res.status(200).json({
            status: 'Success',
            payload: movies
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.getMovies = getMovies;
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, price, category, release, image, premium, duration, seasons } = req.body;
    try {
        const movie = yield instace.createMovie(title, description, price, category, release, image, premium, duration, seasons);
        res.status(201).json({
            status: 'Success',
            payload: movie
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.createMovie = createMovie;
const getMovieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const movie = yield instace.getMovieById(Number(id));
        res.status(200).json({
            status: 'Success',
            payload: movie
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.getMovieById = getMovieById;
