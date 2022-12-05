import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 2000
})

export { httpClient }