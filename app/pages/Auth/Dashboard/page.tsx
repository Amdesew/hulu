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

        <div className='grid grid-cols-2 space-x-20 p-2'>
        
          <div>
     
            <h1 className='text-sm bg-green-500 w-22 mx-auto max-w-lg text-white py-2 rounded-md'>Rented Propertys</h1>
            <ul>
              <li className=''>a</li>
            </ul>
          
          </div>


          <div>
     
            <h1 className='text-sm bg-green-500 w-22 mx-auto py-2 max-w-lg text-white space-x-2 rounded-md'>Solled Propertys</h1>
            
            <ul>
              <li className=''>a</li>
            </ul>
            
          </div>
        
        </div>
        </AuthGuard>
        </SessionProvider>
    
    </div>
  );
};

export default Dashboard;
