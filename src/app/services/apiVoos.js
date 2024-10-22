const { default: axios } = require("axios");

const apiVoos = axios.create({
    baseURL: 'http://localhost:3000/'
})

export default apiVoos