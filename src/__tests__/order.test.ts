import { send } from 'process';
import supertest from 'supertest';
import { app } from '../app';

describe('order', () => {
    describe('get all orders', () => {
        it('should return 200', async () => {
            await supertest(app).get(`/api/orders`).expect(200)
        })
    })

    describe('get one order', () => {
        it('should return 200', async () => {
            const id: number = 2;
            await supertest(app).get(`/api/orders/${id}`).expect(200)
        })
    })

    describe('get one order (not exist)', () => {
        it('should return 404', async () => {
            const id: number = 404; //not exist
            await supertest(app).get(`/api/orders/${id}`).expect(404);
        })
    })

    describe('POST order', () => {
        it('should return 201', async () => {
            await supertest(app).post(`/api/orders`)
                .send({ name: 'Test Name', price: 123, quantity: 5 })
                .expect(201);
        })
    })

    describe('POST order (not all params)', () => {
        it('should return 400 Bad Request', async () => {
            await supertest(app).post(`/api/orders`)
                .send({ name: 'Test Name BAD', price: 400 })
                .expect(400);
        })
    })
})