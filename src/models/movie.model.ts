import { Movie } from "../db/models/movie.table";
import { IMovie } from "../interfaces/IMovie";
import CustomError from "./customError.model";


export default class MovieModel implements IMovie {

    title:          string
    description:    string
    price:          number
    category:       string
    release:        string
    image:          string
    premium:        boolean
    duration:       string
    seasons:        string

    constructor(){
        this.title=''      
        this.description=''
        this.price=0      
        this.category=''   
        this.release=''    
        this.image=''      
        this.premium=false    
        this.duration=''   
        this.seasons=''   
    }


    async createFreeMovie(title: string, description: string, price: number, category: string, release: string, image: string, duration: string, seasons: string){
        try {
            const movie: IMovie = {
                title,
                description,
                price,
                category,
                release,
                image,
                premium: this.premium,
                duration,
                seasons
            }

            const data = await Movie.create({...movie})
        } catch (error) {
        }
    }

    async createPremiumMovie(){
        try {
            
        } catch (error) {

        }
    }


}