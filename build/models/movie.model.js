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
Object.defineProperty(exports, "__esModule", { value: true });
const movie_table_1 = require("../db/models/movie.table");
class MovieModel {
    constructor() {
        this.title = '';
        this.description = '';
        this.price = 0;
        this.category = '';
        this.release = '';
        this.image = '';
        this.premium = false;
        this.duration = '';
        this.seasons = '';
    }
    createFreeMovie(title, description, price, category, release, image, duration, seasons) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movie = {
                    title,
                    description,
                    price,
                    category,
                    release,
                    image,
                    premium: this.premium,
                    duration,
                    seasons
                };
                const data = yield movie_table_1.Movie.create(Object.assign({}, movie));
            }
            catch (error) {
            }
        });
    }
    createPremiumMovie() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        });
    }
}
exports.default = MovieModel;
