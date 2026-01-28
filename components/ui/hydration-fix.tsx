"use client";

import { useEffect, useState } from "react";

interface HydrationFixProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function HydrationFix({ children, fallback = null }: HydrationFixProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

export default HydrationFix;
