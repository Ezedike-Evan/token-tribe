import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useTab } from '@/contexts/navbarContext'

const Navbar = () => {
	const {activeTab, setActiveTab} = useTab()
	return (
		<section className="flex flex-col mt-10 gap-5">
			<div className="flex border items-center rounded-xl px-4 gap-3">
				<FaSearch size={24} />
				<input
					type="text"
					className="p-3 w-full outline-none"
					placeholder={
						activeTab === 'token'
							? 'Explore Our Archives'
							: 'Trace the tides of whales'
					}
				/>
			</div>
			<nav className="bg-[#80808080] flex justify-evenly mx-25 py-2 rounded-xl font-semibold">
				<p
					className={`${
						activeTab === 'token' && 'bg-[#161615]'
					} px-20 py-1 rounded-md cursor-pointer`}
					onClick={() => {
						setActiveTab('token')
					}}
				>
					Token Archive
				</p>
				<p
					className={`${
						activeTab === 'whales' && 'bg-[#161615]'
					} px-20 py-1 rounded-md cursor-pointer`}
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
