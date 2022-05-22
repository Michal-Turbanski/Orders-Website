const Order = require('../db/models/Order');

const getOrders = async (req, res) => {
    res.json({
        message: 'Get all orders'
    });
}

const createOrder = async (req, res) => {
    await Order.create(req.body);

    res.json(req.body);
}

const updateOrder = async (req, res) => {
    res.json({
        message: `Update order ${req.params.id}`
    });
}

const deleteOrder = async (req, res) => {
    res.json({
        message: `Delete order ${req.params.id}`
    });
}

module.exports = {
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
}