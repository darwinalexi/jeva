import { createPool } from "mysql2/promise";
import dotenv from "dotenv"
dotenv.config({ path: './env/.env' });

export const connection = createPool({
    host: process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    port:process.env.PORT
})