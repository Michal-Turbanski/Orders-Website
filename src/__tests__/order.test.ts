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
})