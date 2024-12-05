import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  
  const [todos, setTodos] = useState([])

  // use useEffect when you want to do a side effect (setInterval, setTimeout, etc)
  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json)
    })

    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((res) => res.json())
    //   .then((data) => setTodos(data))

    // axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    //   setTodos(res.data)
    // })

  }, [])

  return (
    <div>
      {todos.map( (todo) => <Todo title={todo.title} completed={todo.completed} id={todo.id} userId={todo.userId}></Todo>)}
    </div>
  )
}

function Todo({id, userId, title, completed}){
  return(
    <div>
      {id}
      <h1>{userId}</h1>
      <h2>
        {title}
      </h2>
      <h4>
        {completed}
      </h4>
    </div>
  )
}

export default App
