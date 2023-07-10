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
          <span>Access denied. {' '}</span>
          <button className="text-akairosu-orange hover:font-bold" onClick={() => signIn()}>
            Sign in
          </button>
        </div>
      </main>
    )
  }
  
  return (
    <main className="relative h-full grid place-content-center">
      <div>
        <span className="text-2xl pr-4 mr-4 border-e-[1px] border-zinc-400">🐐</span>
        <span>Admin. {' '}</span>
        <button className="text-akairosu-orange hover:font-bold" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    </main>
  )
}

export default Home