import express from 'express';
import { edit } from '../controllers/editController';
export const editRouter = express.Router();

editRouter.get('/:id', edit);