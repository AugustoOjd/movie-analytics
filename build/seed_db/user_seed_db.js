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
exports.addUserData = void 0;
const user_service_1 = __importDefault(require("../services/user.service"));
const users = [
    {
        firstName: 'Luis',
        email: 'luis@gmail.com',
        password: '123'
    },
    {
        firstName: 'Ana',
        email: 'ana@gmail.com',
        password: '123'
    },
    {
        firstName: 'Micaela',
        email: 'micaela@gmail.com',
        password: '123'
    }
];
const instance = new user_service_1.default();
const addUserData = () => __awaiter(void 0, void 0, void 0, function* () {
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        yield instance.createNewUserService(element.firstName, element.email, element.password);
    }
});
exports.addUserData = addUserData;
