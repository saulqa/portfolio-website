import axios from 'axios'
const url = "https://portfolio-website-backend-ten.vercel.app/api/projects"
export const getAll = () => {
	const response = axios.get(url)

	return response
}
