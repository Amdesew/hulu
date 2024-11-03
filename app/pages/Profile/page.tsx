"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchUserDetails } from '@/app/components/utils/api';
import AuthGuard from '@/app/components/AuthGuard/page';
import { SessionProvider } from 'next-auth/react';

const Dashboard = () => {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserDetails(token)
        .then(data => setUser(data))
        .catch(error => {
          console.error(error);
          router.push('/pages/Auth/Dashboard');
        });
    } else {
      router.push('/pages/Auth/SignIn');
    }
  }, [router]);

  return (
    <div className='text-center mx-auto'>

        <SessionProvider>
        <AuthGuard>
        {user && <p className='text-xl font-mono'>Hello {user.username}</p>}

        
        </AuthGuard>
        </SessionProvider>
    
    </div>
  );
};

export default Dashboard;
