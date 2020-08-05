import axios from 'axios'

const api = axios.create({
  baseURL: 'https://adonis-savemoney.herokuapp.com/',
})

export default api
 