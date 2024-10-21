import { NextResponse } from "next/server";

export const addFreshInvoice = async (invoice:{invoiceName: string;clientName:string;invoiceDate:string,status:string,product:string,amount:string,action: string}) => {
    const response = await fetch('/api/invoice',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoice),
    })  // Calls the GET API route at /api/users
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error.errorResponse.errmsg || 'Failed to fetch users');
    }
    else{
      return NextResponse.json({ error: `Added Invoice for ${invoice.clientName}` }, { status: 200 });
    }
    // return data.data;  // Return the array of users
  };