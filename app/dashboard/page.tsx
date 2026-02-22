import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Welcome to your Dashboard</h2>
          <p className="text-muted-foreground">
            This is your protected dashboard area. You can only see this page when you're signed in.
          </p>
        </div>
      </div>
    </div>
  )
}
