"use client"
import { SignedIn } from '@clerk/nextjs'
import { ReactNode } from 'react'

interface SignedInProps {
  children: ReactNode
}

export function SignedInComponent({ children }: SignedInProps) {
  return <SignedIn>{children}</SignedIn>
}
