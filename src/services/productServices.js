import axios from "axios";

const productsApi = axios.create({
    baseURL:'http://localhost:3000/products'
})

export const getAll=async()=>{
    const response = await productsApi.get('/')
    return response.data
}

export const deleteProduct = async(id)=>{
    const response = await productsApi.delete(`/${id}`)
    return response.data
}

export const addProduct=async(product)=>{
    const response = await productsApi.post('/', product)
    return response.data
}