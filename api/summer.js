import express from 'express';
import pg from 'pg';

const router = express.Router();
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Route to fetch summer products with pagination
router.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 products per page
    const offset = (page - 1) * limit; // Calculate offset

    try {
        // Ensure you're using the 'pool' variable here
        const products = await pool.query('SELECT * FROM products WHERE category = $1 LIMIT $2 OFFSET $3', ['Summer', limit, offset]);
        console.log(products.rows); // Log the result
        res.status(200).json(products.rows);
    } catch (error) {
        console.error('Error fetching products:', error); // Log any errors
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
