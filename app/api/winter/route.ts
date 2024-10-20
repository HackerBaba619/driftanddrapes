// app/api/winter/route.ts
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Define the GET handler for the API route
export async function GET() {
  try {
    // Fetch winter products from the database
    const result = await sql`
      SELECT * FROM products 
      WHERE category = 'Winter';
    `;

    // Access the rows from the result
    const products = result.rows;

    // If no products are found, return a 404 response
    if (products.length === 0) {
      return NextResponse.json({ error: 'No Winter products found.' }, { status: 404 });
    }

    // Return the fetched products with a 200 response
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return a 500 response in case of an error
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
