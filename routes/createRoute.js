"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouter = void 0;
const express_1 = __importDefault(require("express"));
const createController_1 = require("../controllers/createController");
exports.createRouter = express_1.default.Router();
exports.createRouter.get('/', createController_1.create);
