import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import summerRoute from './api/summer'; // Adjust the import according to your file structure

dotenv.config(); // Load environment variables

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

const app = express();
const PORT = process.env.PORT || 3000;

// Use the summer route for /api/summer
app.use('/api/summer', summerRoute); // This should properly register the route

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
