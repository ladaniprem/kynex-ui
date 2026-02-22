"use client"
import { SignedOut } from '@clerk/nextjs'
import { ReactNode } from 'react'

interface SignedOutProps {
  children: ReactNode
}

export function SignedOutComponent({ children }: SignedOutProps) {
  return <SignedOut>{children}</SignedOut>
}
