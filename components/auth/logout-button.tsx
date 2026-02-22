"use client"

import { useUser, useClerk } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { LogOut, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LogoutButton() {
  const { isSignedIn, user } = useUser()
  const { signOut } = useClerk()

  if (!isSignedIn) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
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
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem disabled>
          <User className="w-4 h-4 mr-2" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
