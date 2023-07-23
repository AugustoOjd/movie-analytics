import { Movie } from '../db/models/movie.table';
import { SoldHistory } from '../db/models/soldHistory.table';
import { User } from '../db/models/user.table';
import { TCategory } from '../interfaces/IMovie';
import CustomError from '../models/customError.model';
import MovieModel from '../models/movie.model';
import SoldHistoryModel from '../models/soldHistory.model';

export default class MovieService {
    
    private movieModel
    private soldHistoryModel
    
    constructor(){

        this.movieModel = new MovieModel()
        this.soldHistoryModel = new SoldHistoryModel()
    }

    async getMovies(skip: number, limit: number, category?: string, query?: string,){
        try {

            if(category){

                if(query){
                    const movie = await Movie.findAll({
                        where: {
                            category: category,
                            premium: query
                        },
                        offset: skip,
                        limit: limit
                    })
                    
                    return movie
                }

                const movie = await Movie.findAll({
                    where: {
                        category: category
                    },
                    offset: skip,
                    limit: limit
                })
                
                return movie
            }

            if(query){
                const movie = await Movie.findAll({
                    where: {
                        premium: query
                    },
                    offset: skip,
                    limit: limit
                })
                
                return movie
            }

            const movies = await Movie.findAll({
                offset: skip,
                limit: limit
            })

            if(!movies) throw new CustomError('internal error', 500, 'error get all movies', true)

            return movies

        } catch (error) {
            throw error
        }
    }

    async createFreeMovie(title: string, description: string, category: TCategory, release: string, image: string, duration: string, seasons: number){
        try {

            if(!title || !description || !category || !release || !image || !duration || !seasons) 
                throw new CustomError('client error', 404, 'inputs are require', true)

            const newFreeMovie = this.movieModel.createFreeMovie(title, description, category, release, image, duration, seasons)

            if(!newFreeMovie) throw new CustomError('internal error', 500, 'model free movie error', true)

            await Movie.create({...newFreeMovie})

            return newFreeMovie

        } catch (error) {
            throw error
        }
    }

    async createPremiumMovie(title: string, description: string, price: number, category: TCategory, release: string, image: string, duration: string, seasons: number){
        try {
            
            if(!title || !description || !price || !category || !release || !image || !duration || !seasons) 
            throw new CustomError('client error', 404, 'inputs are require', true)

        const newPremiumMovie = this.movieModel.createPremiumMovie(title, description, price, category, release, image, duration, seasons)

        if(!newPremiumMovie) throw new CustomError('internal error', 500, 'model free movie error', true)

        await Movie.create({...newPremiumMovie})

        return newPremiumMovie

        } catch (error) {
            throw error
        }
    }

    async getMovieById(id: number){
        try {
            
            if(!id) throw new CustomError('client error', 404, 'id undefined', false)

            const movie = await Movie.findByPk(id)
            
            if(!movie) throw new CustomError('client error', 404, 'id not found', false)

            return movie

        } catch (error) {
            throw error
        }
    }

    async buyMovie(userId: number, movieId: number){
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

    async updateMovie(){

    }

    async deleteMovie(){

    }


}