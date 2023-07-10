'use client'

import type { NextPage } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'

const Home: NextPage = async () => {
  const { data: session } = useSession()
  
  if (!session) {
    return (
      <main className="relative h-full grid place-content-center">
        <div>
          <span className="text-2xl pr-4 mr-4 border-e-[1px] border-zinc-400">🐐</span>
          <span>You do not have permission to access this page.</span>
          <div>
            <button onClick={() => signIn()}>
              Sign in
            </button>
          </div>
        </div>
      </main>
    )
  }
  
  return (
    <main className="relative h-full grid place-content-center">
      <div>
        <span className="text-2xl pr-4 mr-4 border-e-[1px] border-zinc-400">🐐</span>
        <span>Admin</span>
        <div>
          <button onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      </div>
    </main>
  )
}

export default Home