import { Request, Response } from 'express';
// @ts-ignore
const axios = require('axios').default;
// @ts-ignore
const port: number = Number(process.env.PORT) || 3000;

export const edit = async (req: Request, res: Response) => {
    const { data } = await axios.get(`http://127.0.0.1:${port}/api/orders/${req.params.id}`);
    console.log(data);
    res.render('edit', { order: data });
}