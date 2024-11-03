// utils/api.ts
export const fetchUserDetails = async (token: string) => {
    const response = await fetch('http://127.0.0.1:8000/api/user/', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to fetch user details');
    }
  };
  