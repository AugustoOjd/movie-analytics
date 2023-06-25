import { Movie } from '../db/models/movie.table';
import { TCategory } from '../interfaces/IMovie';
import CustomError from '../models/customError.model';
import MovieModel from '../models/movie.model';

export default class MovieService {
    
    private movieModel
    
    constructor(){

        this.movieModel = new MovieModel()
    }

    async getMovies(skip: number, limit: number, category?: string, query?: string){
        try {

            if(!category){
                if(query == '1'){

                    const movies = await Movie.findAll({
                        where: {
                            premium: true
                        },
                        offset: skip,
                        limit: limit
                    })
                    if(!movies) throw new CustomError('internal error', 500, 'error get movies with category and premium true', true)
                    
                    return movies
                }else{
                    
                    const movies = await Movie.findAll({
                        where: {
                            premium: false
                        },
                        offset: skip,
                        limit: limit
                    })
                    if(!movies) throw new CustomError('internal error', 500, 'error get movies with category and premium false', true)
                    
                    return movies
                }
            }

            if(!query){
                if(category){
                    const movies = await Movie.findAll({
                        where: {
                            category: category
                        },
                        offset: skip,
                        limit: limit
                    })
                    if(!movies) throw new CustomError('internal error', 500, 'error get movies with category witout query', true)
                    return movies
                }else{
                    const movies = await Movie.findAll({
                        offset: skip,
                        limit: limit
                    })

                    if(!movies) throw new CustomError('internal error', 500, 'error get movies with query without category', true)
                    return movies
                }
            }

            if(!category || !query){
                const movies = await Movie.findAll({
                    offset: skip,
                    limit: limit
                })

                if(!movies) throw new CustomError('internal error', 500, 'error get movies without category and query', true)

                return movies
            }

            const movies = await Movie.findAll({
                where:{
                    category: category,
                },
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
            console.log(movie)
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