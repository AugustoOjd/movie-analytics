"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptConfig_1 = require("../utils/bcryptConfig");
class UserModel {
    constructor() {
        this.firstName = '';
        this.lastName = null;
        this.age = null;
        this.email = '';
        this.password = '';
        this.role = 'user';
        this.status = true;
        this.wallet = 2000;
        this.type = 'regular';
    }
    createNewUser(firstName, email, password) {
        const user = {
            firstName,
            lastName: this.lastName,
            age: this.age,
            email,
            password: (0, bcryptConfig_1.hashPassword)(password),
            role: this.role,
            status: this.status,
            wallet: this.wallet,
            type: this.type
        };
        return user;
    }
}
exports.default = UserModel;
