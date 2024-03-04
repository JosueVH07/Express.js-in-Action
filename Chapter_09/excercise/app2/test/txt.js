const app = require('../app.js');
const supertest = require('supertest');

describe('Plain text response', () => {
    it('returns a plain text text', (done) => {
        supertest(app)
            .get('/')
            .set('User-Agent', 'my cool browser')
            .set('Accept', 'text/plain')
            .expect('Content-Type', /text\/plain/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).toBe('Hello, my cool browser!');
                done();
            });
    })
    it('returns your userAgent', (done) => {
        supertest(app)
            .get('/')
            .set('User-Agent', 'my cool browser')
            .set('Accept', 'text/plain')
            .expect((res) => {
                if (res.test !== 'my cool browser') {
                    throw new Error('User agent not found in the response')
                }
            })
            .end(done)
    })  
})
