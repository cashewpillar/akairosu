'use client'

import { signIn } from 'next-auth/react'

export const SignIn = () => {
  return (
    <button className="hover:font-bold animate-pulse" onClick={() => signIn()}>
      Sign in
    </button>
  )
}