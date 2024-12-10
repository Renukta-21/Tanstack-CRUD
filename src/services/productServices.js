import axios from "axios";

const productsApi = axios.create({
    baseURL:'http://localhost:3000/products'
})

export const getAll=async()=>{
    const response = await productsApi.get('/')
    return response.data
}