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
exports.getMain = void 0;
const Order_1 = require("../db/models/Order");
const axios_1 = __importDefault(require("axios"));
const { Sequelize } = require('sequelize');
const port = Number(process.env.PORT) || 3000;
const Op = Sequelize.Op;
const getMain = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.search) {
        try {
            const { data } = yield axios_1.default.get(`http://127.0.0.1:${port}/api/orders`);
            res.render('index', { orders: data, search: false });
        }
        catch (error) {
            console.log(error);
        }
    }
    else {
        const { search } = req.query;
        console.log(typeof search);
        try {
            const orders = yield Order_1.Order.findAll({
                where: {
                    [Op.or]: [{
                            id: {
                                [Op.like]: `%${search}%`
                            }
                        }, {
                            name: {
                                [Op.like]: `%${search}%`
                            }
                        }
                    ]
                }
            });
            res.render('index', { orders: orders, search: true });
        }
        catch (error) {
            console.log(error);
        }
    }
});
exports.getMain = getMain;
