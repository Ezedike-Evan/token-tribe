import '@solana/wallet-adapter-react-ui/styles.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Navbar from './navbar'

const DashBoard = () => {
	return (
		<main className="flex flex-col py-12 ml-[288px] px-8 min-h-screen">
			<div className='flex justify-end'>
				<WalletMultiButton />
			</div>
            <Navbar />
		</main>
	)
}

export default DashBoard
