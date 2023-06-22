import { IMovie, TCategory } from "../interfaces/IMovie";


export default class MovieModel implements IMovie {

    title:          string
    description:    string
    price:          number
    category:       TCategory
    release:        string
    image:          string
    premium:        boolean
    duration:       string
    seasons:        number

    constructor(){
        this.title=''      
        this.description=''
        this.price=0      
        this.category='action'   
        this.release=''    
        this.image=''      
        this.premium=false    
        this.duration=''   
        this.seasons=1   
    }


    createFreeMovie(title: string, description: string, category: TCategory, release: string, image: string, duration: string, seasons: number){
            const movie: IMovie = {
                title,
                description,
                price: this.price,
                category,
                release,
                image,
                premium: this.premium,
                duration,
                seasons
            }

            return movie
    }

    createPremiumMovie(title: string, description: string, price: number, category: TCategory, release: string, image: string, duration: string, seasons: number){
            
        const movie: IMovie = {
                title,
                description,
                price,
                category,
                release,
                image,
                premium: true,
                duration,
                seasons
            }
            
            return movie
    }


}