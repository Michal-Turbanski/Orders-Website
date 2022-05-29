import express from 'express';
import { getMain } from '../controllers/mainController';
export const mainRouter = express.Router();

router.get('/', getMain);