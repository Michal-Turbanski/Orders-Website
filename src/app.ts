import express, { Application } from 'express';
import 'dotenv/config';
import 'colorts/lib/string';

import { createRouter } from './routes/createRoute';
import { editRouter } from './routes/editRoute';
import { mainRouter } from './routes/mainRoute';
import { orderRouter } from './routes/orderRoutes';

const sequelize = require('./db/dbConnect');
const path = require('path');

const port: number = Number(process.env.PORT) || 3000;

sequelize.sync()
    .then(() => console.log('DB is ready'.cyan))
    .catch((err: Error) => console.log(`${err}`.red));

const app: Application = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/orders', orderRouter);
app.use('/', mainRouter);
app.use('/create', createRouter);
app.use('/edit', editRouter);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
