"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editRouter = void 0;
const express_1 = __importDefault(require("express"));
const editController_1 = require("../controllers/editController");
exports.editRouter = express_1.default.Router();
exports.editRouter.get('/:id', editController_1.edit);
