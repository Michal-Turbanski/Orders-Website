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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../app");
describe('order', () => {
    describe('get all orders', () => {
        it('should return 200', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, supertest_1.default)(app_1.app).get(`/api/orders`).expect(200);
        }));
    });
    describe('get one order', () => {
        it('should return 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const id = 2;
            yield (0, supertest_1.default)(app_1.app).get(`/api/orders/${id}`).expect(200);
        }));
    });
    describe('get one order (not exist)', () => {
        it('should return 404', () => __awaiter(void 0, void 0, void 0, function* () {
            const id = 404; //not exist
            yield (0, supertest_1.default)(app_1.app).get(`/api/orders/${id}`).expect(404);
        }));
    });
    describe('POST order', () => {
        it('should return 201', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, supertest_1.default)(app_1.app).post(`/api/orders`)
                .send({ name: 'Test Name', price: 123, quantity: 5 })
                .expect(201);
        }));
    });
    describe('POST order (not all params)', () => {
        it('should return 400 Bad Request', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, supertest_1.default)(app_1.app).post(`/api/orders`)
                .send({ name: 'Test Name BAD', price: 400 })
                .expect(400);
        }));
    });
});
