import axios from 'axios'

export function createAxios(context) {
    const http = axios.create({
        baseURL: context ? 'http://localhost:8080/api' : '/api'
    })
    http.interceptors.request.use(
        config => {
            console.log('request config:', config.url);
            return config
        },
        err => Promise.resolve(err)
    )
    http.interceptors.response.use(
        response => {
            console.log('response:', response.data);
            return response.data
        },
        err => {
            console.log('http response:', err.response.status, err.response.data)
            const res = {}
            if (err.response.status === 404) {
                res.code = 404
            }
            return Promise.resolve(res)
        }
    )

    return http
}