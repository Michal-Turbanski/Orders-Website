const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const sequelize = require('./db/dbConnect');
const path = require('path');

// @ts-ignore
const port: number = Number(process.env.PORT) || 3000;

sequelize.sync()
    // @ts-ignore
    .then(() => console.log('DB is ready'.cyan))
    // @ts-ignore
    .catch((err) => console.log(`${err}`.red));

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/', require('./routes/mainRoute'));
app.use('/create', require('./routes/createRoute'))
app.use('/edit', require('./routes/editRoute'));

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
