"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.edit = void 0;
// @ts-ignore
const axios = require('axios').default;
// @ts-ignore
const port = Number(process.env.PORT) || 3000;
const edit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios.get(`http://127.0.0.1:${port}/api/orders/${req.params.id}`);
    console.log(data);
    res.render('edit', { order: data });
});
exports.edit = edit;
