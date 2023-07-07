import { User } from "../db/models/user.table";
import { IUser } from '../interfaces/IUser';
import CustomError from "../models/customError.model";
import UserModel from "../models/user.model";
import { Op } from "sequelize";
import { hashPassword, validPassword } from "../utils/bcryptConfig";

export default class UserService {
    
    private userModel

    constructor(){

        this.userModel = new UserModel()
    }

    async getUsersService(skip: number, limit: number){
        try {
            
            const users = await User.findAll({
                offset: skip,
                limit: limit
            })

            if(!users) throw new CustomError('internal error', 403, 'no authorization', false)

            return users
        } catch (error) {
            throw error
        }
    }

    async createNewUserService(firstName: string, email: string, password: string){
        try {

            if(!firstName || !email || !password) throw new CustomError('client error', 404, 'credentials are require', false)

            const validEmail = await User.findAll({
                where: {
                    email: email
                }
            })

            if(!(validEmail.length <= 0)) throw new CustomError('client error', 404, 'email already exists', false)

            const user = this.userModel.createNewUser(firstName, email, password)
            
            if(!user) throw new CustomError('internal server error', 500, 'error service create user', false)

            await User.create({...user})

            return user

        } catch (error) {
            throw error
        }
    }

    async singinUserService(email: string, password: string){
        try {
            if(!email || !password) throw new CustomError('client error', 404, 'credentials are require', false)

            const user =  await User.findOne({
                where: {
                    email: email
                }
            })

            if(!user) throw new CustomError('client error', 404, 'user not found', false)

            const validatePassword = validPassword(user, password)


            if(!validatePassword) throw new CustomError('client error', 404, 'invalid credentials', false)
            
            return user

        } catch (error) {
            throw error
        }
    }

}