import axios from 'axios'

const httpClient = axios.create({ // create new instance of axios with custom configurations
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 2000
})

export { httpClient }