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
const interactionsHistory_table_1 = require("../db/models/interactionsHistory.table");
const movie_table_1 = require("../db/models/movie.table");
const user_table_1 = require("../db/models/user.table");
const customError_model_1 = __importDefault(require("../models/customError.model"));
const insterations_model_1 = __importDefault(require("../models/insterations.model"));
class InteractionService {
    constructor() {
        this.interactionHistory = new insterations_model_1.default();
    }
    setInterationHistory(userId, movieId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_table_1.User.findByPk(userId);
                if (!user)
                    throw new customError_model_1.default('client error', 404, 'user id no valido', false);
                const movie = yield movie_table_1.Movie.findByPk(movieId);
                if (!movie)
                    throw new customError_model_1.default('client error', 404, 'movie id no valido', false);
                const newInteracion = this.interactionHistory.setInteractionHistory(userId, movieId);
                yield interactionsHistory_table_1.Interactions.create(Object.assign({}, newInteracion));
            }
            catch (error) {
                throw error;
            }
        });
    }
    getInterationHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = InteractionService;
