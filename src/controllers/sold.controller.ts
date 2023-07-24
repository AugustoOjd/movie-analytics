import {Request, Response} from 'express'
import SoldHistoryService from '../services/sold.service'


const instance = new SoldHistoryService()

export const setMovieHistory = async (req: Request, res: Response)=>{
    try {
        const { userId, movieId } = req.body

        const data = await instance.setMovieHistory(Number(userId), Number(movieId))

        res.status(201).json({
            status: 'Success',
            payload: data
        })
    } catch (error) {
        res.json({error})
    }
}

export const getSoldHistory = async (req: Request, res: Response)=>{
    try {
        const data = await instance.getSoldHistoryService()

        res.status(201).json({
            status: 'Success',
            payload: data
        })
    } catch (error) {
        res.json({error})
    }
}