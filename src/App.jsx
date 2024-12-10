import { useQuery } from "@tanstack/react-query"
import axios from "axios"

function App() {
  const fetchProducts = async()=>{
    const response = await axios.get('http://localhost:3000/products')
    return response.data
  }
  const {isPending, isError, data, error} = useQuery({
    queryKey:['products'],
    queryFn:fetchProducts
  })

  if(isPending) return <p>Fethcing data...</p>
  if(isError) return <p>{error.message}</p>

  return (
    <div>
      <h2>App</h2>
      {data.map(d=>(
        <div key={d.id}>
          <h3>{d.name}</h3>
          <p>{d.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App