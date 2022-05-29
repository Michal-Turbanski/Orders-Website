import express from 'express';
import { edit } from '../controllers/editController';
export const editRouter = express.Router();

router.get('/:id', edit);