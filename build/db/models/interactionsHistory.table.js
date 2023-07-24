"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interactions = void 0;
const sequelize_1 = require("sequelize");
const pgConnection_1 = require("../pgConnection");
const user_table_1 = require("./user.table");
const movie_table_1 = require("./movie.table");
exports.Interactions = pgConnection_1.sequelize.define('Interactions', {
    userId: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, allowNull: false, references: {
            model: user_table_1.User,
            key: 'userId'
        } },
    movieId: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, allowNull: false, references: {
            model: movie_table_1.Movie,
            key: 'movieId'
        } }
});
exports.Interactions.hasMany(user_table_1.User, {
    foreignKey: 'userId'
});
exports.Interactions.hasMany(movie_table_1.Movie, {
    foreignKey: 'movieId'
});
