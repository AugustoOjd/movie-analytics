"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SoldHistoryModel {
    constructor() {
        this.userId = 0;
        this.movieId = 0;
    }
    setSoldHistory(userId, movieId) {
        this.userId = userId;
        this.movieId = movieId;
        return this;
    }
}
exports.default = SoldHistoryModel;
