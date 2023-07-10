'use client'

import { signOut } from 'next-auth/react'

export const SignOut = () => {
  return (
    <button className="text-akairosu-orange hover:font-bold" onClick={() => signOut()}>
      Sign out
    </button>
  )
}