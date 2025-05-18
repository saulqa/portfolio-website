import axios from 'axios'

export const getAll = () => {
	const response = axios.get('http://localhost:3001/api/projects')

	return response
}