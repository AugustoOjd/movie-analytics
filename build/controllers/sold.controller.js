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
exports.getSoldHistory = exports.setMovieHistory = void 0;
const sold_service_1 = __importDefault(require("../services/sold.service"));
const instance = new sold_service_1.default();
const setMovieHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, movieId } = req.body;
        const data = yield instance.setMovieHistory(Number(userId), Number(movieId));
        res.status(201).json({
            status: 'Success',
            payload: data
        });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.setMovieHistory = setMovieHistory;
const getSoldHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield instance.getSoldHistoryService();
        res.status(201).json({
            status: 'Success',
            payload: data
        });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.getSoldHistory = getSoldHistory;
