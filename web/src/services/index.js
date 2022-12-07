import axios from 'axios'

const httpClient = axios.create({ // create new instance of axios with custom configurations
    baseURL: 'http://localhost:4000',
    timeout: 2000
})

export { httpClient }