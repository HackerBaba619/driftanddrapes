
import clientPromise from 'mongodb';

export default async function handler(req, res) {
  const { collection } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db('storeDB'); // Make sure this matches your database name

    const products = await db.collection(collection).find({}).toArray();

    if (!products.length) {
      return res.status(404).json({ message: 'No products found' });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}