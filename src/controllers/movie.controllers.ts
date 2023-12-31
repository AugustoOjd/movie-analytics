import {Request, Response} from 'express'
import MovieService from '../services/movie.service'
import { Movie } from '../db/models/movie.table'

const instace = new MovieService()

export const getMovies = async (req: Request, res: Response)=>{

    const {skip = 0, limit= 50, category, vip} = req.query
    try {
        const movies = await instace.getMovies(Number(skip), Number(limit), category?.toString(), vip as string)

        res.status(200).json({
            status: 'Success',
            payload: movies
        })

    } catch (error) {
        res.json(error)
    }
}

export const createMovie = async (req: Request, res: Response)=>{

    const { title, description, price, category, release, image, premium, duration, seasons } = req.body
    try {
            const movie = await instace.createMovie(title, description, price, category, release, image, premium, duration, seasons)

            res.status(201).json({
                status: 'Success',
                payload: movie
            })
    } catch (error) {
        res.json(error)
    }
}

export const getMovieById = async (req: Request, res: Response)=>{
    const {id} = req.params
    try {
        
        const movie = await instace.getMovieById(Number(id))

        res.status(200).json({
            status: 'Success',
            payload: movie
        })
    } catch (error) {
        res.json(error)
    }
}
