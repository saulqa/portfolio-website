import axios from 'axios'

export const getAll = () => {
	const response = axios.get('/api/projects')

	return response
}
