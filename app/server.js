import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

const app = express();
const PORT = process.env.PORT || 3000;

// Route to fetch summer products
app.get('/api/summer', async (req, res) => {
    try {
        const products = await pool.query('SELECT * FROM products WHERE category = $1', ['Summer']);
        console.log(products.rows); // Log the result
        res.status(200).json(products.rows);
    } catch (error) {
        console.error('Error fetching products:', error); // Log any errors
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
