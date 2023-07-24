import {Router} from 'express'
import { setMovieHistory, getSoldHistory } from '../controllers/sold.controller'

const router = Router()


router.post('/movie', setMovieHistory)

router.get('/movie', getSoldHistory)


export default router