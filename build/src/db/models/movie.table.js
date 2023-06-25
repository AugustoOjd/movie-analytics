"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const sequelize_1 = require("sequelize");
const pgConnection_1 = require("../pgConnection");
exports.Movie = pgConnection_1.sequelize.define('Movie', {
    movieId: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    description: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    price: { type: sequelize_1.DataTypes.BIGINT, allowNull: false },
    category: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    release: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    image: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    premium: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: false },
    duration: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    seasons: { type: sequelize_1.DataTypes.STRING, allowNull: false },
});
