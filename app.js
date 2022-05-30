"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const path_1 = __importDefault(require("path"));
require("colorts/lib/string");
const dbConnect_1 = require("./db/dbConnect");
const createRoute_1 = require("./routes/createRoute");
const editRoute_1 = require("./routes/editRoute");
const mainRoute_1 = require("./routes/mainRoute");
const orderRoutes_1 = require("./routes/orderRoutes");
const port = Number(process.env.PORT) || 3000;
dbConnect_1.sequelize.sync()
    .then(() => console.log('DB is ready'.cyan))
    .catch((err) => console.log(`${err}`.red));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/api/orders', orderRoutes_1.orderRouter);
app.use('/', mainRoute_1.mainRouter);
app.use('/create', createRoute_1.createRouter);
app.use('/edit', editRoute_1.editRouter);
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
