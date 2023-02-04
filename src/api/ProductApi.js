import axios from "axios";
import { useProfileStore } from "@/store/index.js";

const BASE_URL = 'http://localhost:3031/api/v1/products'
// const useStore = useProfileStore();

async function getAllProduct() {
    const endpoint = `${BASE_URL}`;
    return await axios.get(endpoint, {
        headers: {
            Authorization: localStorage.getItem('token') || ""
        }
    })
}

async function insertProduct() {
    const endpoint = `${BASE_URL}`;
    return await axios.post(endpoint, {
        headers: {
            Authorization: localStorage.getItem('token') || ""
        }
    })
}

export default {
    getAllProduct
}