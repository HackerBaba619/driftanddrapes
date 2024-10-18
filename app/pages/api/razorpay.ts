// // pages/api/razorpay.ts

// import type { NextApiRequest, NextApiResponse } from 'next';
// import Razorpay from 'razorpay';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { amount } = req.body; // Amount should be passed from the client-side (in paise, i.e. 5000 = 50 INR)
      
//       // Initialize Razorpay instance
//       const razorpay = new Razorpay({
//         key_id: process.env.RAZORPAY_KEY_ID,
//         key_secret: process.env.RAZORPAY_KEY_SECRET,
//       });

//       // Create Razorpay order options
//       const options = {
//         amount: amount, // amount in smallest currency unit (paise for INR)
//         currency: 'INR',
//         receipt: 'order_rcptid_11', // Unique receipt ID
//       };

//       // Create order in Razorpay
//       const order = await razorpay.orders.create(options);
//       res.status(200).json(order);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to create Razorpay order' });
//     }
//   } else {
//     res.status(405).end('Method Not Allowed');
//   }
// }
