// pages/login.tsx
"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.access);
      router.push('/pages/Auth/Dashboard');
    } else {
      setError('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='grid grid-cols-1 mx-auto max-w-lg space-y-3 text-center'>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
          className='border-green-400 border-b-2 h-8 rounded-md'
        />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            className='border-green-400 border-b-2 h-8 rounded-md'
          />
        
        <button type="submit" className='border-r-2 border-l-2 border-b-2 p-1 border-green-400 rounded-full w-20 mx-auto'>Login</button>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        <p>No Account? <a href='/pages/Auth/Register' className='text-blue-600'>Register</a></p>

      </div>
    </form>
  );
}
