"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = __importDefault(require("express"));
const mainController_1 = require("../controllers/mainController");
exports.mainRouter = express_1.default.Router();
exports.mainRouter.get('/', mainController_1.getMain);
