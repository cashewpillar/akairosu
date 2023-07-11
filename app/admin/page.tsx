import type { NextPage, Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Redeploy } from '@/ui/redeploy'
import { SignIn } from '@/ui/sign-in'
import { SignOut } from '@/ui/sign-out'
import { demos } from '@/lib/demos'

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
        <div className="px-4 py-8 flex flex-col m-8 space-y-8 h-[90%] bg-zinc-100 border-b-4 rounded-lg border-zinc-400/30 dark:bg-zinc-800/30 dark:border-zinc-700">
          <table className="table-auto text-left">
            <thead className="text-akairosu-brown">
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
                <td>use after making changes to project assets & info, wait ~2 mins for updates to take effect.</td>
              </tr>
              <tr>
                <td><SignOut /></td>
                <td>sign out of the admin page after use, if on a public device</td>
              </tr>
            </tbody>
          </table>

          <table className="table-auto text-left">
            <caption className='caption-bottom text-xs text-zinc-400 dark:text-zinc-500 text-left'>Quick tip: hover over the header texts to learn what each column means!</caption>
            <thead className='text-akairosu-brown'>
              <tr>
                <th title="your portfolio's pages">Page</th>
                <th title='helps search engines to index the website so they can show up top!'>Description</th>
              </tr>
            </thead>
            <tbody>
              {demos.map((item) => (
                <tr key={item.slug}>
                  <td>{ item.name }</td>
                  <td>{ item.desc }</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}

export default Home