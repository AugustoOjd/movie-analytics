import {Request, Response} from 'express'
import UserService from '../services/user.service'
const instance = new UserService()

export const getTest = async (req: Request, res: Response)=>{
    try {
        res.send('Hello world')
    } catch (error) {
        console.log(error)
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
        res.json({error})
    }
}