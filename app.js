const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const sequelize = require('./db/dbConnect');
const axios = require('axios').default;
const path = require('path');

const port = Number(process.env.PORT) || 3000;

sequelize.sync()
    .then(() => console.log('DB is ready'.cyan))
    .catch((err) => console.log(`${err}`.red));

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/', require('./routes/mainRoute'));

app.get('/create', (req, res) => {
    res.render('create')
})

app.get(`/edit/:id`, async (req, res) => {
    const { data } = await axios.get(`http://127.0.0.1:${port}/api/orders/${req.params.id}`);
    console.log(data);
    res.render('edit', { order: data });
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
