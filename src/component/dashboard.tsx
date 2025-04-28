import '@solana/wallet-adapter-react-ui/styles.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Navbar from './navbar'
import { useTab } from '@/contexts/navbarContext'

type card = {
	imgURL?: string
	token?: string
	whale?: string
	price?: string
	walletAddress?: string
	capbal: number
	rating?: number
	mostTradedAsset?: string
}

const DashBoard = () => {
	const { activeTab } = useTab()

	const currentDisplayedTab = activeTab === 'token' ? token : whales

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
				{currentDisplayedTab.map(
					({
						token,
						whale,
						price,
						walletAddress,
						imgURL,
						capbal,
						rating,
						mostTradedAsset,
					}: card) => (
						<div
							key={token || whale}
							className={activeTab === 'token' ? 'token-card' : 'whale-card'}
						>
							<div
								className={`flex gap-4 ${
									activeTab === 'token' ? 'flex-col' : 'items-center'
								} `}
							>
								<img
									src={imgURL || '/globe.svg'}
									className={`${
										activeTab === 'token' ? 'w-full' : 'size-16 rounded-full'
									}`}
								/>
								<div>
									<h3 className="font-semibold capitalize text-xl">
										{token || whale}
									</h3>
									<p className="font-medium text-xs text-[#ffffff80]">{`$${
										price || walletAddress
									}`}</p>
								</div>
							</div>
							<div className="flex justify-between mt-6">
								<div>
									<p className="font-semibold text-sm">
										{activeTab === 'token' ? 'Market Cap' : 'Wallet Balance'}
									</p>
									<p className="font-semibold text-xs text-[#ffffff80]">{`$${capbal}`}</p>
								</div>
								<div>
									<p className="font-semibold text-sm">
										{activeTab === 'token' ? 'Rating' : 'Most Traded Asset'}
									</p>
									<p className="font-semibold text-xs text-[#ffffff80]">
										{activeTab === 'token' ? `${rating}/10` : mostTradedAsset}
									</p>
								</div>
							</div>
						</div>
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
