import axios from 'axios'

const api = axios.create({
    baseURL: "https://vm-api-node.herokuapp.com/api"
})

export default api