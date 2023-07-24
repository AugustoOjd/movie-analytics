"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoldHistory = void 0;
const sequelize_1 = require("sequelize");
const pgConnection_1 = require("../pgConnection");
const user_table_1 = require("./user.table");
const movie_table_1 = require("./movie.table");
exports.SoldHistory = pgConnection_1.sequelize.define('SoldHistory', {
    userId: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, allowNull: false, references: {
            model: user_table_1.User,
            key: 'userId'
        } },
    movieId: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, allowNull: false, references: {
            model: movie_table_1.Movie,
            key: 'movieId'
        } }
});
exports.SoldHistory.hasMany(user_table_1.User, {
    foreignKey: 'userId'
});
exports.SoldHistory.hasMany(movie_table_1.Movie, {
    foreignKey: 'movieId'
});
