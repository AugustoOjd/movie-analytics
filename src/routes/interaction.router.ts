import { Router } from "express";
import { getInteractionController, setInteractionController } from "../controllers/interactions.controller";

const router = Router()


router.post('/movie', setInteractionController)

router.get('/movie', getInteractionController)


export default router