import express from 'express';
import { pool } from "./db";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({
        message: "Backend API is running!",
        version: "1.0.0"
    });
});

app.get("/health", (_req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

pool.query("SELECT NOW()")
    .then(result => {
        console.log("Connected to PostgreSQL");
        console.log(result.rows[0]);
    })
    .catch(err => {
        console.error("Database connection failed");
        console.error(err);
    });

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});