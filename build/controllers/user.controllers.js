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
exports.logout = exports.singinUser = exports.createNewUser = exports.getUsers = void 0;
const user_service_1 = __importDefault(require("../services/user.service"));
const instance = new user_service_1.default();
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { skip = 0, limit = 10 } = req.query;
    try {
        const users = yield instance.getUsersService(Number(skip), Number(limit));
        return res.status(200).json({
            status: 'Success',
            payload: users
        });
    }
    catch (error) {
        res.json({
            error: error
        });
    }
});
exports.getUsers = getUsers;
const createNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, email, password } = req.body;
    try {
        const newUser = yield instance.createNewUserService(firstName, email, password);
        req.session.user = newUser;
        res.status(201).json({
            status: 'Sucess',
            payload: newUser
        });
    }
    catch (error) {
        res.json({
            error: error
        });
    }
});
exports.createNewUser = createNewUser;
const singinUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield instance.singinUserService(email, password);
        req.session.user = user;
        return res.status(200).json({
            status: 'Success',
            payload: user
        });
    }
    catch (error) {
        res.json({
            error: error
        });
    }
});
exports.singinUser = singinUser;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.session.destroy((err) => {
            res.redirect('/');
        });
    }
    catch (error) {
        res.json({
            error: error
        });
    }
});
exports.logout = logout;
