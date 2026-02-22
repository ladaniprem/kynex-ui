"use client"
import { ClerkProviderWrapper } from "@/lib/clerk"
import { ReactNode } from "react"

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  return <ClerkProviderWrapper>{children}</ClerkProviderWrapper>
}
