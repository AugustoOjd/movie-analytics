import { Router } from "express";
import {getTest, createNewUser} from '../controllers/user.controllers'

const router = Router()

router.get('/', getTest)

router.post('/', createNewUser)


export default router





