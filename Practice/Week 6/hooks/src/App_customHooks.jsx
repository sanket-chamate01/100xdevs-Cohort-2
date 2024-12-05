import { useEffect, useState } from "react"
import axios from "axios"

// we cannot use state variables inside normal function, it has to be a component or a hook
function useTodos(){ // custom hook
    const [todos, setTodos] = useState([])

    useEffect( () => {
          axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
              setTodos(res.data)
          })
  
    }, [])

    return todos;
}

function App() {
  const todos = useTodos()

  return (
    <div>
      {todos.map( (todo) => <Todo key={todo.id} title={todo.title} id={todo.id}></Todo>)}
    </div>
  )
}

function Todo({id, title}){
  return(
    <div>
      <h1>{id}</h1>
      <h2>
        {title}
      </h2>
    </div>
  )
}

export default App
