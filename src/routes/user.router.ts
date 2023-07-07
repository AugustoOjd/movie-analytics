import { Router } from "express";
import {getUsers, createNewUser, singinUser, logout} from '../controllers/user.controllers'
import { validateInputsForm } from "../middlewares/validateInputsForms";
import { userSchema } from "../validations/registerUserValidation";
import { userLoginSchema } from "../validations/loginUserValidation";

const router = Router()

router.get('/', getUsers)

router.post('/signup', validateInputsForm(userSchema), createNewUser)

router.post('/signin',  validateInputsForm(userLoginSchema), singinUser)

router.get('/logout', logout)


export default router





