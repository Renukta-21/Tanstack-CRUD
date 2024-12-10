import { useQuery } from "@tanstack/react-query"
import {getAll} from './services/productServices'

function App() {
  const {isPending, isError, data, error} = useQuery({
    queryKey:['products'],
    queryFn:getAll
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