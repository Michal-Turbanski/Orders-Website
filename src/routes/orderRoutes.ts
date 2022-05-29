import express from 'express';
import { getOrders, getOrder, createOrder, updateOrder, deleteOrder } from '../controllers/orderController';
export const orderRouter = express.Router();

orderRouter.get('/', getOrders);

orderRouter.get('/:id', getOrder);

orderRouter.post('/', createOrder);

orderRouter.put('/:id', updateOrder);

orderRouter.delete('/:id', deleteOrder);