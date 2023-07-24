import { Movie } from "../db/models/movie.table";
import { IMovie } from "../interfaces/IMovie";
import MovieService from "../services/movie.service";

const movies: IMovie[] =  [
    {
      title: "The Witcher",
      description: "A monster hunter embarks on epic adventures in a world full of mythical creatures.",
      price: 20,
      category: "fantasy",
      release: "2019",
      image: "https://static.wikia.nocookie.net/brujo/images/1/19/The_Witcher_Poster_Netflix.jpg/revision/latest?cb=20191130024239&path-prefix=es",
      premium: true, 
      duration: "58m",
      seasons: 3
    },
    {
      title: "Inception",
      description: "A thief who enters the dreams of others to steal their secrets.",
      price: 15,
      category: "action",
      release: "2010",
      image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      premium: true, 
      duration: "2h 28m",
      seasons: 0
    },
    {
      title: "Stranger Things",
      description: "A group of kids encounters supernatural events in their small town.",
      price: 18,
      category: "drama",
      release: "2016",
      image: "https://i.pinimg.com/originals/9d/53/1d/9d531d43c46b4b579b93e9d4c94d55a2.jpg",
      premium: true,
      duration: "51m",
      seasons: 4
    },
    {
      title: "The Conjuring",
      description: "Paranormal investigators confront a powerful demonic entity.",
      price: 0,
      category: "terror",
      release: "2013",
      image: "https://images-na.ssl-images-amazon.com/images/I/91%2BA4UjvpGL._AC_SL1500_.jpg",
      premium: false,
      duration: "1h 52m",
      seasons: 0
    },
    {
      title: "Breaking Bad",
      description: "A high school chemistry teacher turned methamphetamine manufacturer.",
      price: 22,
      category: "drama",
      release: "2008",
      image: "https://images-na.ssl-images-amazon.com/images/I/81T8kHT4FgL._AC_SY679_.jpg",
      premium: true,
      duration: "47m",
      seasons: 5
    },
    {
      title: "Avengers: Endgame",
      description: "Marvel superheroes unite to defeat the powerful villain Thanos.",
      price: 0,
      category: "action",
      release: "2019",
      image: "https://images-na.ssl-images-amazon.com/images/I/81AIkUzNz%2BL._AC_SY606_.jpg",
      premium: false,
      duration: "3h 2m",
      seasons: 0
    },
    {
      title: "Game of Thrones",
      description: "Noble families vie for control of the Seven Kingdoms of Westeros.",
      price: 20,
      category: "fantasy",
      release: "2011",
      image: "https://images-na.ssl-images-amazon.com/images/I/91j6sFT9UjL._AC_SY879_.jpg",
      premium: true,
      duration: "57m",
      seasons: 8
    },
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
      price: 10,
      category: "drama",
      release: "1994",
      image: "https://images-na.ssl-images-amazon.com/images/I/51SJKfNPiJL._AC_SY450_.jpg",
      premium: true,
      duration: "2h 22m",
      seasons: 0
    },
    {
      title: "The Exorcist",
      description: "A girl is possessed by a mysterious entity, and her mother seeks help from two priests.",
      price: 0,
      category: "terror",
      release: "1973",
      image: "https://images-na.ssl-images-amazon.com/images/I/51lN-+XZ7RL._AC_.jpg",
      premium: false,
      duration: "2h 2m",
      seasons: 0
    },
    {
      title: "The Matrix",
      description: "A computer programmer discovers the shocking truth about the reality of his world.",
      price: 0,
      category: "action",
      release: "1999",
      image: "https://images-na.ssl-images-amazon.com/images/I/51j1JnRDMkL._AC_SY679_.jpg",
      premium: false,
      duration: "2h 16m",
      seasons: 0
    }
]

const instace = new MovieService()

export const addMovieData = async ()=>{
    for (let index = 0; index < movies.length; index++) {
        const element = movies[index];
        
        await instace.createMovie(element.title, element.description, element.price, element.category, element.release, element.image, element.premium, element.duration, element.seasons)
    }
}


