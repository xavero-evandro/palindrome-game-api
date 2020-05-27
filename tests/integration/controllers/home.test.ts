import request from 'supertest';
import app from '../../../src/app';

describe('GET /', () => {
  it('should have a redirect to /api-docs', async done => {
    const res = await request(app).get('/');
    expect(res.status).toBe(302);
    expect(res.header.location).toBe('/api-docs');
    done();
  });
});
