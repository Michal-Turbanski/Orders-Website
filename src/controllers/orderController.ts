import { Request, Response } from 'express';
import { Order } from '../db/models/Order';

export const getOrders = async (req: Request, res: Response) => {
    try {
        const orders = await Order.findAll();
        res.json(orders)
    } catch (error) {
        console.log(error);
    }
}

export const getOrder = async (req: Request, res: Response) => {
    try {
        const order = await Order.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!order) res.sendStatus(404);
        res.json(order);
    } catch (error) {
        console.log(error);
    }
}

export const createOrder = async (req: Request, res: Response) => {
    try {
        const { name, price, quantity } = req.body;
        if (name && price && quantity) {
            await Order.create(req.body);
            res.sendStatus(201);
        } else {
            res.sendStatus(400);
        }

    } catch (error) {
        console.log(error);
    }
}

export const updateOrder = async (req: Request, res: Response) => {
    try {
        const order = await Order.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!order) res.sendStatus(404);

        const { name, price, quantity } = req.body;
        if (name && price && quantity) {
            await Order.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteOrder = async (req: Request, res: Response) => {
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