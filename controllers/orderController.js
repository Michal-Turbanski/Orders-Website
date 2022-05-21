const getOrders = async (req, res) => {
    res.json({
        message: 'Get all orders'
    });
}

const createOrder = async (req, res) => {
    res.json({
        message: 'Create order'
    });
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