import { connect, disconnect } from 'mongoose';

import { DATABASE_URL } from './config';

export function connectDatabase() {
  async function run() {
    await connect(DATABASE_URL);
    console.log('✔ Connected successfully to server');
  }
  run().catch(console.dir);
}

export async function disconnectDatabase() {
  try {
    await disconnect();
    console.log('✔ Disconnected successfully from server');
  } catch (e) {
    console.dir(e);
  }
}
