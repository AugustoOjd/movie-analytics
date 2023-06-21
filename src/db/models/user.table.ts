import {DataTypes} from 'sequelize'
import { sequelize } from '../pgConnection';

export const User = sequelize.define('User', {
    userId:         { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    firstName:      { type: DataTypes.STRING, allowNull: false},
    lastName:       { type: DataTypes.STRING},
    age:            { type: DataTypes.STRING},
    email:          { type: DataTypes.STRING, allowNull: false},
    password:       { type: DataTypes.STRING, allowNull: false},
    role:           { type: DataTypes.STRING, allowNull: false},
    status:         { type: DataTypes.BOOLEAN, allowNull: false},
    wallet:         { type: DataTypes.BIGINT, allowNull: false},
    type:           { type: DataTypes.STRING, allowNull: false},
})