import { Interactions } from '../db/models/interactionsHistory.table'
import { Movie } from '../db/models/movie.table'
import { User } from '../db/models/user.table'
import CustomError from '../models/customError.model'
import InteractionsModel from '../models/insterations.model'



export default class InteractionService {

    private interactionHistory

    constructor(){
        this.interactionHistory = new InteractionsModel()
    }


    async setInterationHistory(userId: number, movieId: number){
        try {
            
            const user = await User.findByPk(userId)
            if(!user) throw new CustomError('client error', 404, 'user id no valido', false)

            const movie = await Movie.findByPk(movieId)
            if(!movie) throw new CustomError('client error', 404, 'movie id no valido', false)

            const newInteracion =  this.interactionHistory.setInteractionHistory(userId, movieId)

            await Interactions.create({...newInteracion})

        } catch (error) {
            throw error
        }
    }

    async getInterationHistory(){
        try {
            
        } catch (error) {
            throw error
        }
    }
}