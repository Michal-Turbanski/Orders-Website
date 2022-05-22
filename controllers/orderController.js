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
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
}