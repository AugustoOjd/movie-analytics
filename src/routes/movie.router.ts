import {Router} from 'express'
import { createMovie, getMovies } from '../controllers/movie.controllers'

const router = Router()

router.get('/', getMovies)

router.post('/', createMovie)


export default router