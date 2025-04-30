'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import DashBoard from '@/component/dashboard'
import Profile from '@/component/profile'
import { useState } from 'react'

const Home = () => {
	const [queryClient] = useState(() => new QueryClient())
	return (
		<QueryClientProvider client={queryClient}>
			<Profile />
			<DashBoard />
		</QueryClientProvider>
	)
}

export default Home
