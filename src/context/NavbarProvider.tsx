// NavbarProvider.tsx
import React, { createContext, useContext, ReactNode } from 'react';

interface User {
  name: string | null;
}

interface NavbarContextType {
  user: User | null;
  role: string | null;
}

const NavbarContext = createContext<NavbarContextType>({ user: null, role: null });

export const useNavbarContext = () => useContext(NavbarContext);

interface NavbarProviderProps {
  children: ReactNode;
  user: User | null;
  role: string | null;
}

const NavbarProvider: React.FC<NavbarProviderProps> = ({ children, user, role }) => {
  return (
    <NavbarContext.Provider value={{ user, role }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
