"use client"

import { useUser, useClerk } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { User, LogIn } from "lucide-react"

export function LoginButton() {
  const { isSignedIn, isLoaded, user } = useUser()
  const { openSignIn } = useClerk()

  if (!isLoaded) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <User className="w-4 h-4 mr-2" />
        Loading...
      </Button>
    )
  }

  if (isSignedIn) {
    return (
      <Button variant="ghost" size="sm" asChild>
        <div className="flex items-center gap-2">
          {user?.imageUrl ? (
            <img
              src={user.imageUrl}
              alt={user.fullName || "User"}
              className="w-6 h-6 rounded-full"
            />
          ) : (
            <User className="w-4 h-4" />
          )}
          <span className="hidden sm:inline">
            {user?.fullName || user?.primaryEmailAddress?.emailAddress}
          </span>
        </div>
      </Button>
    )
  }

  return (
    <Button variant="ghost" size="sm" onClick={() => openSignIn()}>
      <LogIn className="w-4 h-4 mr-2" />
      Sign In
    </Button>
  )
}
