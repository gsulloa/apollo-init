export const NODE_ENV: string = process.env.NODE_ENV || 'development';
export const IS_PRODUCTION: boolean = NODE_ENV === 'production';

export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_PORT = Number(process.env.DATABASE_PORT || 5432);
