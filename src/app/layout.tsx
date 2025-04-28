import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WalletContext from '../contexts/walletContext'
import { TabProvider } from '@/contexts/navbarContext'
import { CivicAuthProvider } from "@civic/auth/nextjs";

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: 'Token Tribe',
	description: 'Get infomation about tokens and whales account on the solana blockchain',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable}`}
		>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link
					href="https://fonts.googleapis.com/css2?family=Trade+Winds&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<WalletContext>
					<CivicAuthProvider>
						<TabProvider>{children}</TabProvider>
					</CivicAuthProvider>
				</WalletContext>
			</body>
		</html>
	)
}
