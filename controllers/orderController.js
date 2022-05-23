const Order = require('../db/models/Order');

const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders)
    } catch (error) {
        console.log(error);
    }
}

const getOrder = async (req, res) => {
    try {
        const order = await Order.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(order);
    } catch (error) {
        console.log(error);
    }
}

const createOrder = async (req, res) => {
    try {
        await Order.create(req.body);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
    }
}

const updateOrder = async (req, res) => {
    try {
        await Order.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
}

const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findOne({
            where: {
                id: req.params.id
            }
        })

        if (order) {
            Order.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
}