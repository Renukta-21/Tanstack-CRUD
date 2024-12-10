import { useMutation, useQueryClient } from "@tanstack/react-query"
import {addProduct} from '../services/productServices'

function AddProduct() {
    const queryClient = useQueryClient()

    const addProductMutation = useMutation({
        mutationFn:addProduct,
        onSuccess:()=>{
            queryClient.invalidateQueries('products')
        },
        onError:(error)=>{
            console.log(error.message)
        }
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const product = Object.fromEntries(formData)
        addProductMutation.mutate(product)
    }
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameField">Name</label>
        <input type="text" id="nameField" name="name"/>
        <br />
        <label htmlFor="descriptionField">Description</label>
        <input type="text" id="descriptionField" name="description"/>
        <br />
        <label htmlFor="priceField">Price</label>
        <input type="number" id="priceField" name="price"/>
        <button>Save</button>
      </form>
    </div>
  )
}

export default AddProduct
