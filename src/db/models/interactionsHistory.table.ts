import {DataTypes} from 'sequelize'
import { sequelize } from '../pgConnection';
import { User } from './user.table';
import { Movie } from './movie.table';
import { SoldHistory } from './soldHistory.table';

export const Interactions = sequelize.define('Interactions', {
    userId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, references: {
        model: User,
        key: 'userId'
    }},
    movieId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, references: {
        model: Movie,
        key: 'movieId'
    }}
})

Interactions.hasMany(User, {
    foreignKey: 'userId'
})

Interactions.hasMany(Movie, {
    foreignKey: 'movieId'
})