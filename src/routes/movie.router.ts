import {Router} from 'express'
import { createMovie, getMovies, getMovieById } from '../controllers/movie.controllers'

const router = Router()

router.get('/', getMovies)

router.get('/:id', getMovieById)

router.post('/', createMovie)


export default router