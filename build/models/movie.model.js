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
        this.premium = false;
        this.duration = '';
        this.seasons = 1;
    }
    createFreeMovie(title, description, category, release, image, duration, seasons) {
        const movie = {
            title,
            description,
            price: this.price,
            category,
            release,
            image,
            premium: this.premium,
            duration,
            seasons
        };
        return movie;
    }
    createPremiumMovie(title, description, price, category, release, image, duration, seasons) {
        const movie = {
            title,
            description,
            price,
            category,
            release,
            image,
            premium: true,
            duration,
            seasons
        };
        return movie;
    }
}
exports.default = MovieModel;
