import axios from 'axios'

const httpClient = axios.create({ // create new instance of axios with custom configurations
    baseURL: process.env.BACKEND_URL,
    timeout: 2000
})

export { httpClient }