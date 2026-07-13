import { Pool } from "pg";

export const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "backend_api",
    user: "postgres",
    password: "Neuha312!"
});
