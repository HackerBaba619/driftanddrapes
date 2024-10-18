// pages/api/products/Summer-vibes.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

// Replace this with your actual connection string
const uri = process.env.MONGODB_URI;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db('storeDB'); // Ensure the correct database name
    const products = await db.collection('Summer-vibes').find({}).toArray();

    res.status(200).json(products);
    client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
};

export default handler;
