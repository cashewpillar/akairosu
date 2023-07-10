'use client'

import type { NextPage } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'

export const AdminDashboard: NextPage = async () => {
  const { data: session } = useSession()
  
  return (
    <main className="relative h-full grid place-content-center">
      {!session? (
        <div>
          <span className="text-2xl pr-4 mr-4 border-e-[1px] border-zinc-400">🐐</span>
          <span>Access denied. {' '}</span>
          <button className="text-akairosu-orange hover:font-bold" onClick={() => signIn()}>
            Sign in
          </button>
        </div>
      ):(
        <>
          <div>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Admin</th>
                  <th>
                    <button className="text-akairosu-orange hover:font-bold" onClick={() => signOut()}>
                      Sign out
                    </button>
                  </th>
                </tr>
                <tr>
                  <th>Action</th>
                  <th>Function</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Redeploy</td>
                  <td>Use after making changes to project assets and info. Wait ~3 mins for updates to take effect</td>
                </tr>
              </tbody>
            </table>

            <h3>Update Texts</h3>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>About</td>
                  <td>akairosu_</td>
                  <td>🐐 garden goat phvtuber · art · live2d</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </main>
  )
}