import type { NextPage, Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Redeploy } from '@/ui/redeploy'
import { SignIn } from '@/ui/sign-in'
import { SignOut } from '@/ui/sign-out'
import { demos } from '@/lib/demos'
import { EditableText } from '@/ui/editable-text'

export const metadata: Metadata = {
  title: 'Admin',
}

const Home: NextPage = async () => {
  const session = await getServerSession(authOptions)
  const redeploy_hook = process.env.VERCEL_DEPLOY_HOOK!
  
  return (
    <main className="h-full overflow-hidden">
      {!session? (
        <div className="h-full grid place-content-center">
          <div>
            <span className="text-2xl pr-4 mr-4 border-e-[1px] border-zinc-400">🐐</span>
            <span>Access denied. {' '}</span>
            <SignIn />
          </div>
        </div>
      ):(
        <div className="overflow-y-auto px-4 py-8 flex flex-col mt-8 lg:m-8 space-y-8 h-[90%] bg-zinc-100 border-b-4 rounded-lg border-zinc-400/30 dark:bg-zinc-800/30 dark:border-zinc-700">
          <table className="table-auto text-left">
            <thead className="text-akairosu-brown">
              <tr>
                <th>Action</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='align-top'>
                  <Redeploy redeployHook={redeploy_hook} />
                </td>
                <td>use after making changes to project assets & info, wait ~2 mins for updates to take effect.</td>
              </tr>
              <tr>
                <td className='align-top'><SignOut /></td>
                <td>sign out of the admin page after use, if on a public device.</td>
              </tr>
            </tbody>
          </table>

          <table className="table-auto text-left">
            <caption className='caption-bottom text-xs text-zinc-400 dark:text-zinc-500 text-left'>Note: table above is just for example and won&apos;t do anything with the website.</caption>
            <thead className='text-akairosu-brown'>
              <tr>
                <th title="your portfolio's pages">Page</th>
                <th title="text descriptions inside the page">Content</th>
                <th title='helps search engines to index the website so they can show up top!'>Description</th>
              </tr>
            </thead>
            <tbody>
              {demos.map((item) => (
                <tr key={item.slug}>
                  <td className='align-top'>{ item.name }</td>
                  <td>-</td>
                  <td> <EditableText text={item.desc} /> </td>
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