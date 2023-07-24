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
const soldHistory_model_1 = __importDefault(require("../models/soldHistory.model"));
class SoldHistoryService {
    constructor() {
        this.soldHistoryModel = new soldHistory_model_1.default();
    }
    setMovieHistory(userId, movieId) {
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
    getSoldHistoryService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sold = yield soldHistory_table_1.SoldHistory.findAll({ include: movie_table_1.Movie });
                if (sold.length <= 0)
                    throw new customError_model_1.default('internal server error', 500, 'Error in db', true);
                return sold;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = SoldHistoryService;
