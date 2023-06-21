import {DataTypes} from 'sequelize'
import { sequelize } from '../pgConnection';

export const Movie = sequelize.define('Movie', {
    movieId:    { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    title:      { type: DataTypes.STRING, allowNull: false},
    description:{ type: DataTypes.STRING, allowNull: false},
    price:      { type: DataTypes.BIGINT, allowNull: false},
    category:   { type: DataTypes.STRING, allowNull: false},
    release:    { type: DataTypes.STRING, allowNull: false},
    image:      { type: DataTypes.STRING, allowNull: false},
    premium:    { type: DataTypes.BOOLEAN, allowNull: false},
    duration:   { type: DataTypes.STRING, allowNull: false},
    seasons:    { type: DataTypes.STRING, allowNull: false},
})