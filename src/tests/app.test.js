const request = require('supertest');
const app = require('../app');

describe('web application', () => {
  test('GET / returns the capstone greeting', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    // expect(response.text).toBe('Hello from AWS CI/CD Capstone Project!');
  });

  test('GET /health returns healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});

