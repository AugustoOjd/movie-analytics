import {Router} from 'express'
import { createMovie, getMovies, getMovieById} from '../controllers/movie.controllers'
import { validateSessionUser } from '../middlewares/validateSessionUser'

const router = Router()

// validateSessionUser,
router.get('/', getMovies)

router.get('/detail/:id', getMovieById)

router.post('/', createMovie)


export default router