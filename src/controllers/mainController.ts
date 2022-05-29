// @ts-ignore
const Order = require('../db/models/Order');
// @ts-ignore
const axios = require('axios').default;
// @ts-ignore
const port: number = Number(process.env.PORT) || 3000;
//@ts-ignore
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

const getMain = async (req, res) => {
    if (!req.query.search) {
        try {
            const { data } = await axios.get(`http://127.0.0.1:${port}/api/orders`);
            res.render('index', { orders: data, search: false });
        } catch (error) {
            console.log(error);
        }
    } else {
        const { search } = req.query;
        console.log(typeof search);
        try {
            const orders = await Order.findAll({
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
            })
            res.render('index', { orders: orders, search: true })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = { getMain }