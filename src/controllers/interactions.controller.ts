import {Request, Response} from 'express'
import InteractionService from '../services/interaction.service'

const instance = new InteractionService()

export const setInteractionController = async (req: Request, res: Response) =>{
    try {
        const { userId, movieId } = req.body

        const data = await instance.setInterationHistory(userId, movieId)

        res.status(201).json({
            status: 'Sucess',
            payload: data
        })
    } catch (error) {
        return res.json({error})
    }
}

export const getInteractionController = async (req: Request, res: Response) =>{
    try {
        
    } catch (error) {
        return res.json({error})
    }
}