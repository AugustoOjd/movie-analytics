import {Request, Response, NextFunction} from 'express'


export const validateSessionUser = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const user = req.session.user
        if(user){
            res.status(200).json(user) 
            next()
        }
        else{
            res.redirect('/')
        }
    } catch (error) {
        next(error)
    }
}