import { addMovieData } from "./movie_seed_db"
import { addUserData } from "./user_seed_db"



const addData = async () => {
    await addMovieData()
    await addUserData()
}

addData()