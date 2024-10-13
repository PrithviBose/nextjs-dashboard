import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';



export const createUser = async (users: { email: string; password: string ;action: string}) => {

  const user = {email:users.email, password:bcrypt.hashSync(users.password, 10),action:users.action};
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    const data = await response?.json()
    if (!response.ok) {
      return data
    }
    console.log(data)
    return data
  }



  export const fetchUsers = async (users:{email: string;password:string;action: string}) => {
    const response = await fetch('/api/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(users),
    })  // Calls the GET API route at /api/users
    const data = await response.json();
    const isPasswordValid = bcrypt.compareSync(users?.password, data?.data.password);
    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch users');
    }
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    else{
      return NextResponse.json({ error: 'Login Successful' }, { status: 200 });
    }
    // return data.data;  // Return the array of users
  };