const express = require('express');
const dotenv = require('dotenv').config();
const port: number = Number(process.env.PORT) || 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/orders', require('./routes/orderRoutes'));

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);

})