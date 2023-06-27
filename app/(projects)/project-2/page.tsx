import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Project 2',
  description: '',
}

const Home: NextPage = () => {
  return (
    <main className="relative h-full grid place-content-center">
      <div>
        <span className="text-2xl pr-4 mr-4 border-e-[1px] border-zinc-400">🐐</span>
        <span>Project 2</span>
      </div>
    </main>
  )
}

export default Home