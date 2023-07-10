'use client'

import { signIn } from 'next-auth/react'

export const SignIn = () => {
  return (
    <button className="text-akairosu-orange hover:font-bold" onClick={() => signIn()}>
      Sign in
    </button>
  )
}