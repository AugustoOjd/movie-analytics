

export default class SoldHistoryModel {

    userId:     number
    movieId:    number

    constructor(){
        
        this.userId = 0
        this.movieId = 0
    }

    setSoldHistory(userId: number, movieId: number){
        this.userId = userId
        this.movieId = movieId

        return this
    }

}