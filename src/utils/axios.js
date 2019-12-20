import axios from 'axios'

export const serverAxios = axios.create({
  timeout: 5000,
  baseURL: 'http://localhost:8080/api/'
})
export const clientAxios = axios.create({
  timeout: 5000,
  baseURL: '/api/'
})
