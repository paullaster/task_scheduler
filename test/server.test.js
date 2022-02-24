/**Test cases */
const request = require('supertest');
const app = require('../server');

describe('Task', () =>{
    it('GET tasks -->array task', ()=>{
        return request(app)
        .get('/task/assigned')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response.body).toEqual(
            expect.arrayContaining([
                expect.ojectContaining({
                    task_id : expect.any(Integer),
                })
            ])
        )
    });
})