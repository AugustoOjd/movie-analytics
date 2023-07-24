import { Movie } from '../db/models/movie.table';
import { SoldHistory } from '../db/models/soldHistory.table';
import { User } from '../db/models/user.table';
import CustomError from '../models/customError.model';
import SoldHistoryModel from '../models/soldHistory.model';


export default class SoldHistoryService {

    private soldHistoryModel

    constructor(){  
        this.soldHistoryModel = new SoldHistoryModel()
    }

    async setMovieHistory(userId: number, movieId: number){
        try {

            const user = await User.findByPk(userId)
            if(!user) throw new CustomError('client error', 404, 'invalid user id', false)
            
            const movie = await Movie.findByPk(movieId)
            if(!movie) throw new CustomError('client error', 404, 'movie id not found', false)

            const sold = this.soldHistoryModel.setSoldHistory(userId, movieId)

            await SoldHistory.create({...sold})

            return sold
        } catch (error) {
            throw error
        }
    }

    async getSoldHistoryService(){
        try {
            
            const sold = await SoldHistory.findAll({ include: Movie })

            if(sold.length <= 0) throw new CustomError('internal server error', 500, 'Error in db', true)
            
            return sold
        } catch (error) {
            throw error
        }
    }
}