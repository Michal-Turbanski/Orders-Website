import express from 'express';
import { create } from '../controllers/createController';
export const createRouter = express.Router();

createRouter.get('/', create);