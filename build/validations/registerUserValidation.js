"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const yup_1 = require("yup");
exports.userSchema = (0, yup_1.object)({
    firstName: (0, yup_1.string)().required().min(3).max(15).matches(/^[a-zA-Z ]+$/),
    email: (0, yup_1.string)().email().required().min(3).max(20),
    password: (0, yup_1.string)().required().min(6).max(15)
});
