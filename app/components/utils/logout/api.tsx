// utils/api.ts
export const logout = async (refreshToken: string) => {
    const response = await fetch('http://your-django-api-url/api/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });
  
    if (response.ok) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      return true;
    } else {
      throw new Error('Logout failed');
    }
  };
  