export const createUser = async (user: { email: string; password: string }) => {
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



  export const fetchUsers = async () => {
    const response = await fetch('/api/users');  // Calls the GET API route at /api/users
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch users');
    }
  
    return data.data;  // Return the array of users
  };