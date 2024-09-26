"use client";

import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  session: Session | null;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useSession must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider = ({
  session,
  children,
}: Readonly<{
  session: Session | null;
  children: React.ReactNode;
}>) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ session: null }}>
      {children}
    </AuthContext.Provider>
  );
};
