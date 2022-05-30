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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrder = exports.getOrders = void 0;
const Order_1 = require("../db/models/Order");
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield Order_1.Order.findAll();
        res.json(orders);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getOrders = getOrders;
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order_1.Order.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(order);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getOrder = getOrder;
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, quantity } = req.body;
        if (name && price && quantity) {
            yield Order_1.Order.create(req.body);
            res.sendStatus(201);
        }
        else {
            res.sendStatus(400);
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.createOrder = createOrder;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order_1.Order.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!order)
            res.sendStatus(404);
        const { name, price, quantity } = req.body;
        if (name && price && quantity) {
            yield Order_1.Order.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            res.sendStatus(200);
        }
        else {
            res.sendStatus(400);
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateOrder = updateOrder;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order_1.Order.findOne({
            where: {
                id: req.params.id
            }
        });
        if (order) {
            Order_1.Order.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.sendStatus(200);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteOrder = deleteOrder;
