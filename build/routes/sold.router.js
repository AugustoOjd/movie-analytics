"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sold_controller_1 = require("../controllers/sold.controller");
const router = (0, express_1.Router)();
router.post('/movie', sold_controller_1.setMovieHistory);
router.get('/movie', sold_controller_1.getSoldHistory);
exports.default = router;
