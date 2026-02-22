"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Calendar } from "lucide-react"

// Mock session data to avoid next-auth dependency
const mockSession = {
  user: {
    name: "Ladani prem",
    email: "ladaniprem123@example.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
}

export function UserProfile() {
  const session = mockSession // Using mock data instead of useSession()

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
            <AvatarFallback>
              <User className="w-10 h-10" />
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl">{session.user?.name || "Unknown User"}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-2">
              <Mail className="w-4 h-4" />
              {session.user?.email || "No email"}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Signed in via {session.user?.image ? "OAuth" : "Email"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Active</Badge>
          <Badge variant="outline">User</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
