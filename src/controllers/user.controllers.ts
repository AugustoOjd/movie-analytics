import {Request, Response} from 'express'
import UserService from '../services/user.service'
const instance = new UserService()

export const getUsers = async (req: Request, res: Response)=>{
    const {skip = 0, limit=10} = req.query
    try {
        const users = await instance.getUsersService(Number(skip), Number(limit))
        
        return res.status(200).json({
            status: 'Success',
            payload: users
        })
    } catch (error) {
        res.json({
            error:error
        })
    }
}

export const createNewUser = async (req: Request, res: Response)=>{
    const {firstName, email, password} = req.body
    try {
        const newUser = await instance.createNewUserService(firstName, email, password)

        req.session.user = newUser

        res.status(201).json({
            status: 'Sucess',
            payload: newUser
        })
    } catch (error) {
        res.json({
            error:error
        })
    }
}

export const singinUser = async (req: Request, res: Response)=>{
    const {email, password} = req.body
    try {
        
        const user = await instance.singinUserService(email, password)

        req.session.user = user

        return res.status(200).json({
            status: 'Success',
            payload: user
        })
    } catch (error) {
        res.json({
            error:error
        })
    }
}

export const logout = async (req: Request, res: Response)=>{
    try {
        req.session.destroy( (err)=>{
            res.redirect('/')
        })
    } catch (error) {
        res.json({
            error:error
        })
    }
}