import '@solana/wallet-adapter-react-ui/styles.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { LiaUserNinjaSolid } from 'react-icons/lia'

const Profile = () => {
	return (
		<aside className="flex flex-col justify-between border-r-[1.5px] border-[#808080] py-12 w-2xs absolute left-0 items-center h-screen">
			<div className="flex flex-col items-center gap-5">
				<h2 className="font-tradewinds text-4xl">Token Tribe</h2>
				<LiaUserNinjaSolid
					size={160}
					className="border-10 rounded-full "
				/>
			</div>
			<div className='flex flex-col items-center gap-16'>
				<WalletMultiButton />
        <p>mode switch</p>
			</div>
		</aside>
	)
}

export default Profile
