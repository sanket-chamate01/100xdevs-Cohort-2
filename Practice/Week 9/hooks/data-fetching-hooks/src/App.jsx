import "./App.css"
import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(n){
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("https://dummyjson.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false)
        })
    }, n * 1000)
    axios.get("https://dummyjson.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false)
      })
    clearInterval(interval)
  }, [n])
  

  return {todos, loading}
}

function App() {
  
  const {todos, loading} = useTodos(5)

  return (
    <>
    {loading ? "Loading..." : todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.id}
    <br />
    {todo.todo}
  </div>
}

export default App