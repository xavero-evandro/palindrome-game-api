import * as server from '../../src/server';

describe('GET /random-url', () => {
  it('should start and close the server fine ', async done => {
    server.stopServer();
    done();
  });
});
