import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-wxt8.onrender.com'
})
