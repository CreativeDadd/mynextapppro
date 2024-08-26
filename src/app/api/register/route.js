// src/app/api/register/route.js
import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';

export async function POST(req) {
  try {
    await dbConnect();

    const { email, password } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: 'User already exists' }), {
        status: 400,
      });
    }

    // Create a new user
    const newUser = await User.create({ email, password });

    return new Response(JSON.stringify(newUser), {
      status: 201,
    });
  } catch (error) {
    console.error('Error in registration:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
