import { config } from 'dotenv';

config();

export const ENV: string = process.env.NODE_ENV || 'development';
export const PORT: string = process.env.PORT || '5000';
export const DATABASE_URL: string = process.env.DATABASE_URL;
export const WEB_APP_URL: string = process.env.WEB_APP_URL;
