import express from 'express';
import pg from 'pg';

const router = express.Router();
const { Pool } = pg;

// Create a pool connection using the environment variable for Postgres URL
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

// Route to fetch summer products with pagination
router.get('/', async (req, res) => {
    console.log("Received request for summer products");

    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 products per page
    const offset = (page - 1) * limit; // Calculate offset

    try {
        // Execute the query to fetch summer products
        const products = await pool.query('SELECT * FROM products WHERE category = $1 LIMIT $2 OFFSET $3', ['Summer', limit, offset]);
        
        // Check if products were found
        if (products.rowCount === 0) {
            console.warn("No products found for the requested category and page.");
            return res.status(404).json({ error: 'No products found.' });
        }

        console.log("Fetched products:", products.rows); // Log the fetched products
        res.status(200).json({
            products: products.rows,
            totalPages: Math.ceil(products.rowCount / limit), // Calculate total pages based on row count
            currentPage: page,
        });
    } catch (error) {
        console.error('Error fetching products:', error); // Log the error details
        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
});

export default router;
