import app from './app';
import { PORT } from './config/config';

let server: import('http').Server;

export async function startServer(): Promise<void> {
  server = app.listen(PORT || 3333, () => {
    console.log(`🏃‍♂️🎮Server Started on Port ${PORT}`);
  });
}

export const stopServer = (): any => {
  server.close();
};
