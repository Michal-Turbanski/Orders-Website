import { Request, Response } from 'express';
import axios from 'axios';

const port: number = Number(process.env.PORT) || 3000;

export const edit = async (req: Request, res: Response) => {
    const { data } = await axios.get(`http://127.0.0.1:${port}/api/orders/${req.params.id}`);
    res.render('edit', { order: data });
}