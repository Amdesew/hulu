// pages/index.tsx or layout.tsx (for example)
import React from "react";
import { useSession, signIn, signOut, SessionProvider } from 'next-auth/react';
import Layout from "../layout";

const Home: React.FC = () => {
  const { data: session, status } = useSession();

  // Handle loading state
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <SessionProvider session={session}>
      <div>
        {session ? (
          <>
            <p>Welcome, {session.user?.name}!</p>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <p>You are not logged in.</p>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </div>
    </SessionProvider>
  );
};

export default Home;
