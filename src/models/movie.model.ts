import { IMovie, TCategory } from "../interfaces/IMovie";


export default class MovieModel implements IMovie {

    title:          string
    description:    string
    price:          number
    category:       TCategory
    release:        string
    image:          string
    stock:          number;  
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
        this.stock= 30      
        this.premium=false    
        this.duration=''   
        this.seasons=1   
    }


    createMovie(title: string, description: string, price: number, category: TCategory, release: string, image: string, premium: boolean, duration: string, seasons: number){
            const movie: IMovie = {
                title,
                description,
                price,
                category,
                release,
                image,
                stock: this.stock,
                premium,
                duration,
                seasons
            }

            return movie
    }

}