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

    async createMovie(title: string, description: string, price: number, category: TCategory, release: string, image: string, premium: boolean, duration: string, seasons: number){
        try {

            if(!title || !description || !price || !category || !release || !image || !duration || !seasons) 
                throw new CustomError('client error', 404, 'inputs are require', true)

            const newMovie = this.movieModel.createMovie(title, description, price, category, release, image, premium, duration, seasons)

            if(!newMovie) throw new CustomError('internal error', 500, 'model create movie error', true)

            await Movie.create({...newMovie})

            return newMovie

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



    async updateMovie(){

    }

    async deleteMovie(){

    }


}