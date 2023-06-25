"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const pgConnection_1 = require("../pgConnection");
exports.User = pgConnection_1.sequelize.define('User', {
    userId: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    lastName: { type: sequelize_1.DataTypes.STRING },
    age: { type: sequelize_1.DataTypes.STRING },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    role: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    status: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: false },
    wallet: { type: sequelize_1.DataTypes.BIGINT, allowNull: false },
    type: { type: sequelize_1.DataTypes.STRING, allowNull: false },
});
