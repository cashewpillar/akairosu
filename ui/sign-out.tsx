'use client'

import { signOut } from 'next-auth/react'

export const SignOut = () => {
  return (
    <button className="w-24 text-sm transition-all rounded-full bg-akairosu-blue hover:bg-akairosu-brown text-akairosu-white" onClick={() => signOut()}>
      Sign out
    </button>
  )
}