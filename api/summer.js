// app/api/summer/route.ts
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const offset = (page - 1) * limit;

  try {
    // Fetch summer products
    const products = await sql`
      SELECT * FROM products 
      WHERE category = 'Summer' 
      LIMIT ${limit} OFFSET ${offset};
    `;

    // Fetch total count for pagination
    const totalRows = await sql`
      SELECT COUNT(*) FROM products WHERE category = 'Summer';
    `;
    const totalCount = parseInt(totalRows[0].count);
    const totalPages = Math.ceil(totalCount / limit);

    // If no products are found
    if (products.length === 0) {
      return NextResponse.json({ error: 'No summer products found.' }, { status: 404 });
    }

    return NextResponse.json({ products, totalPages }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
