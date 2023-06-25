import cors from 'cors'
import cookieParser from 'cookie-parser'
import express from 'express'
import session from 'express-session'
declare module 'express-session' {
    export interface SessionData {
      user: { [key: string]: any };
    }
  }
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()

import { sequelize } from './db/pgConnection'
import { User } from './db/models/user.table'
import { Movie } from './db/models/movie.table'
import { SoldHistory } from './db/models/soldHistory.table'
import { Interactions } from './db/models/interactions.table'

import userRouter from './routes/user.router'
import movieRouter from './routes/movie.router'

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}) )
app.use(cors())
app.use(cookieParser())
app.use(session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.use('/api/user', userRouter)
app.use('/api/movie', movieRouter)

// dbconnection

const dbConnection = async () =>{
    try {
        await sequelize.authenticate();

        // await User.sync()
        // await Movie.sync()
        // await SoldHistory.sync()
        // await Interactions.sync()

        // await User.sync({force: true})
        // await Movie.sync({force: true})
        // await SoldHistory.sync({force: true})
        // await Interactions.sync({force: true})
        // console.log('Connection has been established successfully.');
      } catch (error) {
        // console.log('Unable to connect to the database:', error);
      }
}
dbConnection()

export default app