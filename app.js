const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const sequelize = require('./db/dbConnect');

const port = Number(process.env.PORT) || 3000;

sequelize.sync()
    .then(() => console.log('DB is ready'.cyan))
    .catch((err) => console.log(`${err}`.red));

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/orders', require('./routes/orderRoutes'));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
