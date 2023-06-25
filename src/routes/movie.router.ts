import {Router} from 'express'
import { createMovie, getMovies, getMovieById, getHello } from '../controllers/movie.controllers'

const router = Router()

router.get('/', getMovies)

router.get('/detail/:id', getMovieById)

router.get('/hello', getHello)

router.post('/', createMovie)


export default router