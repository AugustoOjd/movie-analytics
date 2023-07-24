"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MovieModel {
    constructor() {
        this.title = '';
        this.description = '';
        this.price = 0;
        this.category = 'action';
        this.release = '';
        this.image = '';
        this.stock = 30;
        this.premium = false;
        this.duration = '';
        this.seasons = 1;
    }
    createMovie(title, description, price, category, release, image, premium, duration, seasons) {
        const movie = {
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
        };
        return movie;
    }
}
exports.default = MovieModel;
