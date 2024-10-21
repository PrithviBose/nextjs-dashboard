



import { NextResponse } from 'next/server';
import connectToDatabase from '../../lib/mongodb'; // Path to your mongoose connection file
import Invoice from '@/app/models/invoice';

// Connect to the database when the route is hit
await connectToDatabase();

// Handle GET and POST requests in the `users` API route

// export async function GET() {
//   try{
//     const users = await User.find();  // Fetch all users from the database
//     return NextResponse.json({ success: true, data: users }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error }, { status: 500 });
//   }
// }

export async function POST(req: Request) {
  try {
    const body = await req.json();  // Parse request body to JSON
    if(body.action === 'Add-invoice'){
      const newUser = await Invoice.create(body);  // Create new invoice with the request body
      return NextResponse.json({ success: true, data: newUser }, { status: 201 });
    }
    if(body.action === 'Get-invoice'){
      const user = await Invoice.findOne({ email: body.email });  // Find user by email
      return NextResponse.json({ success: true, data: user }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 400 });
  }
}

