import request from 'supertest';
import app from '../../../src/app';

describe('POST /api/submitEntry', () => {
  it('should add a new score a empty array', async done => {
    const res = await request(app).post('/api/submitEntry').send({
      name: 'Evandro',
      word: 'a man a plan a canal panama',
    });
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({ points: 27 });
    done();
  });

  it('should return 400 with a invalid parameters', async done => {
    const res = await request(app).post('/api/submitEntry').send({
      name: '',
      word: '',
    });
    expect(res.status).toBe(400);
    done();
  });
});

describe('GET /api/getScores', () => {
  it('should return a empty array', async done => {
    const res = await request(app).get('/api/getScores');
    expect(res.status).toBe(200);
    done();
  });

  it('should return the Top 5 Scores', async done => {
    const postRes = await request(app).post('/api/submitEntry').send({
      name: 'Evandro',
      word: 'bobbob',
    });
    expect(postRes.status).toBe(200);
    const res = await request(app).get('/api/getScores');
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual([
      { name: 'Evandro', points: 27 },
      { name: 'Evandro', points: 6 },
    ]);
    done();
  });
});
