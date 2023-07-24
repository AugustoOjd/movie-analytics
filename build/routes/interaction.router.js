"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const interactions_controller_1 = require("../controllers/interactions.controller");
const router = (0, express_1.Router)();
router.post('/movie', interactions_controller_1.setInteractionController);
router.get('/movie', interactions_controller_1.getInteractionController);
exports.default = router;
