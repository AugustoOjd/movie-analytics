import {Request, Response, NextFunction} from 'express'

export const validateInputsForm = (schema: any) => async (req:Request, res:Response, next: NextFunction) => {
    
    const body = req.body
    
    try {
      await schema.validate(body);
      return next();
    } catch (error) {
      return res.status(404).json(error)
    }
  }