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
const user_table_1 = require("../db/models/user.table");
const customError_model_1 = __importDefault(require("../models/customError.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const bcryptConfig_1 = require("../utils/bcryptConfig");
class UserService {
    constructor() {
        this.userModel = new user_model_1.default();
    }
    getUsersService(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_table_1.User.findAll({
                    offset: skip,
                    limit: limit
                });
                if (!users)
                    throw new customError_model_1.default('internal error', 403, 'no authorization', false);
                return users;
            }
            catch (error) {
                throw error;
            }
        });
    }
    createNewUserService(firstName, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!firstName || !email || !password)
                    throw new customError_model_1.default('client error', 404, 'credentials are require', false);
                const validEmail = yield user_table_1.User.findAll({
                    where: {
                        email: email
                    }
                });
                if (!(validEmail.length <= 0))
                    throw new customError_model_1.default('client error', 404, 'email already exists', false);
                const user = this.userModel.createNewUser(firstName, email, password);
                if (!user)
                    throw new customError_model_1.default('internal server error', 500, 'error service create user', false);
                yield user_table_1.User.create(Object.assign({}, user));
                return user;
            }
            catch (error) {
                throw error;
            }
        });
    }
    singinUserService(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!email || !password)
                    throw new customError_model_1.default('client error', 404, 'credentials are require', false);
                const user = yield user_table_1.User.findOne({
                    where: {
                        email: email
                    }
                });
                if (!user)
                    throw new customError_model_1.default('client error', 404, 'user not found', false);
                const validatePassword = (0, bcryptConfig_1.validPassword)(user, password);
                if (!validatePassword)
                    throw new customError_model_1.default('client error', 404, 'invalid credentials', false);
                return user;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = UserService;
