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
exports.getInteractionController = exports.setInteractionController = void 0;
const interaction_service_1 = __importDefault(require("../services/interaction.service"));
const instance = new interaction_service_1.default();
const setInteractionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, movieId } = req.body;
        const data = yield instance.setInterationHistory(userId, movieId);
        res.status(201).json({
            status: 'Sucess',
            payload: data
        });
    }
    catch (error) {
        return res.json({ error });
    }
});
exports.setInteractionController = setInteractionController;
const getInteractionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.json({ error });
    }
});
exports.getInteractionController = getInteractionController;
