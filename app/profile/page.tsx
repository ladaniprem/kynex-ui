import { UserProfile } from "@/components/auth/user-profile"

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">User Profile</h1>
        <UserProfile />
      </div>
    </div>
  )
}
