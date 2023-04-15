"use client";

import { useState, useEffect } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

/**
 * @description This component is only rendered on the client side. It is used to prevent the server from rendering components that are not needed on the server side. This is for hydration purposes.
 */
const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
