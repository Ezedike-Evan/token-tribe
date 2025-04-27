import { FaSearch } from 'react-icons/fa'
import { useTab } from '@/contexts/navbarContext'

const Navbar = () => {
	const {activeTab, setActiveTab} = useTab()
	return (
		<section className="flex flex-col mt-6 gap-5 pb-4">
			<div className="flex border items-center rounded-lg px-4 gap-3 md:rounded-xl">
				<FaSearch size={24} />
				<input
					type="text"
					className="p-2 w-full outline-none md:p-3 text-xs md:text-base"
					placeholder={
						activeTab === 'token'
							? 'Explore Our Archives'
							: 'Trace the tides of whales'
					}
				/>
			</div>
			<nav className="bg-[#80808080] flex justify-evenly py-2 rounded-md font-semibold text-[8px] md:mx-25 md:text-base md:rounded-xl">
				<p
					className={`${
						activeTab === 'token' && 'bg-[#161615]'
					} px-6 py-1 rounded-md cursor-pointer md:px-20`}
					onClick={() => {
						setActiveTab('token')
					}}
				>
					Token Archive
				</p>
				<p
					className={`${
						activeTab === 'whales' && 'bg-[#161615]'
					} px-6 py-1 rounded-md cursor-pointer md:px-20`}
					onClick={() => {
						setActiveTab('whales')
					}}
				>
					Vault Of Whales
				</p>
			</nav>
		</section>
	)
}

export default Navbar
