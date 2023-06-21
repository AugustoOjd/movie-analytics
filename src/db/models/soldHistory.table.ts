import {DataTypes} from 'sequelize'
import { sequelize } from '../pgConnection';
import { User } from './user.table';
import { Movie } from './movie.table';

export const SoldHistory = sequelize.define('SoldHistory', {
    userId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, references: {
        model: User,
        key: 'userId'
    }},
    movieId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, references: {
        model: Movie,
        key: 'movieId'
    }}
})