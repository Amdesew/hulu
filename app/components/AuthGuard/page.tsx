// components/AuthGuard.tsx
"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Login from "../SignIn/page";
import { useRouter } from "next/navigation";
import React from "react";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
     // Redirect to login if not authenticated
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // Display a loading state while checking auth status
  }

  return <>
  {children}</>; // If authenticated, render the protected content
};

export default AuthGuard;
