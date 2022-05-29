var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-ignore
const Order = require('../db/models/Order');
const getOrders = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const orders = yield Order.findAll();
        res.json(orders);
    }
    catch (error) {
        console.log(error);
    }
});
const getOrder = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const order = yield Order.findOne({
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
const createOrder = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { name, price, quantity } = req.body;
        if (name && price && quantity) {
            yield Order.create(req.body);
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
const updateOrder = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const order = yield Order.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!order)
            res.sendStatus(404);
        const { name, price, quantity } = req.body;
        if (name && price && quantity) {
            yield Order.update(req.body, {
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
const deleteOrder = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const order = yield Order.findOne({
            where: {
                id: req.params.id
            }
        });
        if (order) {
            Order.destroy({
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
module.exports = {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
};
