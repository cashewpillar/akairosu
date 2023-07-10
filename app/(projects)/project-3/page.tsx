import type { Metadata, NextPage } from 'next'
import { 
  getMetadataDescription,
  getMetadataTitle
} from '@/utils/getMetadata'

export const metadata: Metadata = {
  title: getMetadataTitle('project-3'),
  description: getMetadataDescription('project-3'),
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