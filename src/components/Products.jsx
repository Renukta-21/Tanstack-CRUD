import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAll, deleteProduct } from '../services/productServices'

function Products() {
const queryClient = useQueryClient()

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: getAll,
  })

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries('products')
    }
  })

  if (isPending) return <p>Fethcing data...</p>
  if (isError) return <p>{error.message}</p>

  return (
    <div>
      <h2>App</h2>
      {data.map((d) => (
        <div key={d.id}>
          <h3>{d.name}</h3>
          <p>{d.description}</p>
          <button onClick={() => deleteMutation.mutate(d.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Products
