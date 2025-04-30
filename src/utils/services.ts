import { api } from './axiosInstance'

export const fetchMyData = async () => {
	try {
		const response = await api.get('/token/list?sort_by=market_cap&sort_order=desc&page=1&page_size=100')
		return response?.data
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

export const fetchWhaleData = async () => {
	try {
		const response = await api.get('account/leaderboard?sort_by=total_values&sort_order=desc&page=1&page_size=100')
		return response?.data
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}
