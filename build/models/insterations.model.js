"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InteractionsModel {
    constructor() {
        this.userId = 0;
        this.movieId = 0;
    }
    setInteractionHistory(userId, movieId) {
        this.userId = userId;
        this.movieId = movieId;
        return this;
    }
}
exports.default = InteractionsModel;
