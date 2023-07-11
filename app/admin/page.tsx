import type { NextPage, Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Redeploy } from '@/ui/redeploy'
import { SignIn } from '@/ui/sign-in'
import { SignOut } from '@/ui/sign-out'

export const metadata: Metadata = {
  title: 'Admin',
}

const Home: NextPage = async () => {
  const session = await getServerSession(authOptions)
  const redeploy_hook = process.env.VERCEL_DEPLOY_HOOK!
  
  return (
    <main className="relative h-full w-full">
      {!session? (
        <div className="h-full grid place-content-center">
          <div>
            <span className="text-2xl pr-4 mr-4 border-e-[1px] border-zinc-400">🐐</span>
            <span>Access denied. {' '}</span>
            <SignIn />
          </div>
        </div>
      ):(
        <div className="m-8 h-[90%] bg-zinc-100 border-b-4 rounded-lg dark:rounded-none dark:border-b-2 border-zinc-400/30 dark:bg-transparent dark:border-akairosu-white">
          <table className="table-auto text-left">
            <thead>
              <tr>
                <th>Admin</th>
                <th>
                  <SignOut />
                </th>
              </tr>
              <tr>
                <th>Action</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Redeploy redeployHook={redeploy_hook} />
                </td>
                <td>Use after making changes to project assets and info. Wait ~2 mins for updates to take effect.</td>
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
      )}
    </main>
  )
}

export default Home