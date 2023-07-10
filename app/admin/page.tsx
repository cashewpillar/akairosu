import type { NextPage, Metadata } from 'next'
import { AdminDashboard } from '@/ui/admin-dashboard'

export const metadata: Metadata = {
  title: 'Admin',
}

const Home: NextPage = () => {
  return (
    <AdminDashboard />
  )
}

export default Home