"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pgConnection_1 = require("./db/pgConnection");
const user_router_1 = __importDefault(require("./routes/user.router"));
const movie_router_1 = __importDefault(require("./routes/movie.router"));
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// routes
app.use('/api/user', user_router_1.default);
app.use('/api/movie', movie_router_1.default);
// dbconnection
const dbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pgConnection_1.sequelize.authenticate();
        // await User.sync()
        // await Movie.sync()
        // await SoldHistory.sync()
        // await Interactions.sync()
        // await User.sync({force: true})
        // await Movie.sync({force: true})
        // await SoldHistory.sync({force: true})
        // await Interactions.sync({force: true})
        // console.log('Connection has been established successfully.');
    }
    catch (error) {
        // console.log('Unable to connect to the database:', error);
    }
});
dbConnection();
exports.default = app;
