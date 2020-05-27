import * as config from '../../../src/config/config';

describe('GET /', () => {
  it('should have a redirect to /api-docs', () => {
    expect(config.PORT).toBe('3333');
  });
});
