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

    describe('PUT order', () => {
        it('should return 200', async () => {
            const id: number = 2;
            await supertest(app).put(`/api/orders/${id}`)
                .send({ name: 'Updated Value', price: 99999, quantity: 1 })
                .expect(200);
        })
    })

    describe('PUT order (not all params)', () => {
        it('should return 400 Bad Request', async () => {
            const id: number = 2;
            await supertest(app).put(`/api/orders/${id}`)
                .send({ name: 'Updated Value', price: 99999 })
                .expect(400);
        })
    })

    describe('PUT order (not exist)', () => {
        it('should return 404 Not Found', async () => {
            const id: number = 404; //not exist
            await supertest(app).put(`/api/orders/${id}`)
                .send({ name: 'Updated Value', price: 99999, quantity: 1 })
                .expect(404);
        })
    })

    describe('DELETE order (not exist)', () => {
        it('should return 404 Not Found', async () => {
            const id: number = 404; //not exist
            await supertest(app).delete(`/api/orders/${id}`)
                .expect(404);
        })
    })

    //this test is not very good without fake DB, because we can delete them only once (if exist) and then it'll be throwing errors 404
    describe('DELETE order', () => {
        it('should return 200', async () => {
            const id: number = 15;
            await supertest(app).delete(`/api/orders/${id}`)
                .expect(200);
        })
    })
})