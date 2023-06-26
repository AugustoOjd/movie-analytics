import { Router } from "express";
import {getUsers, createNewUser, singinUser, logout} from '../controllers/user.controllers'

const router = Router()

router.get('/', getUsers)

router.post('/signup', createNewUser)

router.post('/signin', singinUser)

router.get('/logout', logout)


export default router





