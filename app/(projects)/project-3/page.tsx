import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Illustrations',
  description: '',
}

const Home: NextPage = () => {
  return (
    <main className="relative h-full grid place-content-center">
      <div>
        <span className="text-2xl pr-4 mr-4 border-e-[1px] border-zinc-400">🐐</span>
        <span>Project 3</span>
      </div>
    </main>
  )
}

export default Home