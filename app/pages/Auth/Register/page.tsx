"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router =  useRouter();
  

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/register/', {
        username,
        password,
      });
      alert('User registered successfully');
      router.push('/pages/Auth/SignIn')
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div className='grid grid-cols-1 mx-auto max-w-lg text-center space-y-5'>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='border-green-500 border-b-2 rounded-md'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-green-500 border-b-2 rounded-md'
          />
          <button type="submit" className='border-r-2 border-l-2 border-b-2 p-1 border-green-400 rounded-full w-20 mx-auto'>Register</button>

          <p>Already Have An Account? <a href="/pages/Auth/SignIn" className='text-blue-700'>Login</a></p>
        </div>
      </form>
    </div>
  );
}
