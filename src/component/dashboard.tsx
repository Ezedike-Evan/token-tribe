import '@solana/wallet-adapter-react-ui/styles.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Navbar from './navbar'
import { useTab } from '@/contexts/navbarContext'
import { useSolscanTokenData } from '@/hooks/usesolscandata'
import { useSolscanWhaleData } from '@/hooks/usesolscandata'

type card = {
	imgURL?: string
	name?: string
	account?: string
	price?: number
	walletAddress?: string
	address?: string
	symbol?: string
	total_values?: number
	sol_values?: number
}

const DashBoard = () => {
	const { activeTab } = useTab()

	const { data, isLoading } = useSolscanTokenData()
	const { data: whaleData } = useSolscanWhaleData()
	const tokenFilteredData = data?.data.filter(
		(item: any) =>
			typeof item.name === 'string' &&
			item.name.trim() !== '' &&
			typeof item.price === 'number'
	)
	console.log('whales data ', whaleData?.data?.data)

	const currentDisplayedTab =
		activeTab === 'token' ? tokenFilteredData : whaleData?.data?.data

	return (
		<main className="flex flex-col relative min-h-screen md:ml-[288px] md:px-8">
			<div className="sticky top-[56px] bg-[#0E0E0D] px-4 md:pt-10 md:top-0 md:px-0">
				<div className="flex justify-end">
					<WalletMultiButton />
				</div>
				<Navbar />
			</div>
			<section
				className={`my-18 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-4 px-4 md:gap-10 md:my-6 md:px-0`}
			>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					currentDisplayedTab.map(
						({
							name,
							account,
							price,
							address,
							symbol,
							total_values,
							sol_values,
						}: card) => (
							<div
								key={name || account}
								className={activeTab === 'token' ? 'token-card' : 'whale-card'}
							>
								<div
									className={`flex gap-4 ${
										activeTab === 'token' ? 'flex-col' : 'items-center'
									} `}
								>
									<img
										src={
											'https://tse2.mm.bing.net/th/id/OIP.snGQVKaMS-otJyoj8RqWFgHaEm?rs=1&pid=ImgDetMain'
										}
										className={`${
											activeTab === 'token' ? 'w-full' : 'size-16 rounded-full'
										}`}
									/>
									<div>
										<h3 className="font-semibold capitalize text-xl w-[200px] truncate ">
											{name || account}
										</h3>
										<p className="font-medium text-xs text-[#ffffff80] max-w-[200px] break-words">
											{address || account}
										</p>
									</div>
								</div>
								<div className="flex justify-between mt-6">
									<div>
										<p className="font-semibold text-sm">
											{activeTab === 'token' ? 'Price' : 'Wallet Balance'}
										</p>
										<p className="font-semibold text-xs text-[#ffffff80] break-words">
											{activeTab === 'token'
												? `$${price}`
												: `$${total_values?.toLocaleString()}`}
										</p>
									</div>
									<div>
										<p className="font-semibold text-sm">
											{activeTab === 'token' ? 'Symbol' : 'Solana Amount'}
										</p>
										<p className="font-semibold text-xs text-[#ffffff80]">
											{activeTab === 'token'
												? symbol
												: `$${sol_values?.toLocaleString()}`}
										</p>
									</div>
								</div>
								{activeTab === 'token' && (
									<p className='text-[10px] font-bold text-center mt-5'>click to view details and risk assessment from dd.xyz</p>
								)}
							</div>
						)
					)
				)}
			</section>
		</main>
	)
}

export default DashBoard

const token = [
	{
		imgURL:
			'https://tse2.mm.bing.net/th/id/OIP.snGQVKaMS-otJyoj8RqWFgHaEm?rs=1&pid=ImgDetMain',
		token: 'solana',
		price: '300',
		capbal: 5600000000,
		rating: 10,
	},
	{
		imgURL:
			'https://tse2.mm.bing.net/th/id/OIP.snGQVKaMS-otJyoj8RqWFgHaEm?rs=1&pid=ImgDetMain',
		token: 'Bitcoin',
		price: '300',
		capbal: 5600000000,
		rating: 10,
	},
	{
		imgURL:
			'https://tse2.mm.bing.net/th/id/OIP.snGQVKaMS-otJyoj8RqWFgHaEm?rs=1&pid=ImgDetMain',
		token: 'etherum',
		price: '300',
		capbal: 5600000000,
		rating: 10,
	},
	{
		imgURL:
			'https://tse2.mm.bing.net/th/id/OIP.snGQVKaMS-otJyoj8RqWFgHaEm?rs=1&pid=ImgDetMain',
		token: 'litecoin',
		price: '300',
		capbal: 5600000000,
		rating: 10,
	},
]
const whales = [
	{
		imgURL:
			'https://tse2.mm.bing.net/th/id/OIP.snGQVKaMS-otJyoj8RqWFgHaEm?rs=1&pid=ImgDetMain',
		whale: 'superteam ng',
		walletAddress: '0xsuperteam.ng',
		capbal: 5600000000,
		mostTradedAsset: 'solana',
	},
	{
		imgURL:
			'https://tse2.mm.bing.net/th/id/OIP.snGQVKaMS-otJyoj8RqWFgHaEm?rs=1&pid=ImgDetMain',
		whale: 'superteam lagos',
		walletAddress: '0xsuperteam.lagos',
		capbal: 5600000000,
		mostTradedAsset: 'solana',
	},
	{
		imgURL:
			'https://tse2.mm.bing.net/th/id/OIP.snGQVKaMS-otJyoj8RqWFgHaEm?rs=1&pid=ImgDetMain',
		whale: 'superteam imo',
		walletAddress: '0xsuperteam.imo',
		capbal: 5600000000,
		mostTradedAsset: 'solana',
	},
]
