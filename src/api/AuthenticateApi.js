import axios from "axios";
const BASE_URL = 'http://localhost:3031/api/v1/users'

async function login(formData) {
    const endpoint = `${BASE_URL}/login`;
    return await axios.post(endpoint, formData)
}

async function register(formData) {
    const endpoint = `${BASE_URL}/register`;
    return await axios.post(endpoint, formData)
}

async function getProfil(email) {
    const endpoint = `${BASE_URL}/${email}`;
    return await axios.get(endpoint)
}

export default {
    login,
    register,
    getProfil
}