import { ENV, PORT, WEB_APP_URL } from './config/config';
import { connectDatabase } from './config/database';
import { server } from './config/server';

connectDatabase();

console.log('⌛ Bootstraping application...');
console.log('💻 Mode', ENV);

server
  .listen(PORT)
  .on('error', (err: Error) => {
    console.log('🔥 Application failed to start', err);
    process.exit(0);
  })
  .on('listening', () => {
    console.log('🚀 Application started', `${WEB_APP_URL}:${PORT}`);
  });
