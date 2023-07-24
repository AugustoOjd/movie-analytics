

export default class InteractionsModel {

    userId:     number
    movieId:    number

    constructor(){
        
        this.userId = 0
        this.movieId = 0
    }

    setInteractionHistory(userId: number, movieId: number){
        this.userId = userId
        this.movieId = movieId

        return this
    }
}