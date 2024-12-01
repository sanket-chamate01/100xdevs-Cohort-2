import { useState } from 'react'
function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "go to gym at 6am",
    completed: false
  }, {
    title: "Eat breakfast",
    description: "eat breakfast at 8am",
    completed: false
  }])

  function addTodo(){
    setTodos([...todos, {
      title: "Eat breakfast",
      description: "eat breakfast at 8am",
      completed: false
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add random todo</button>
      {todos.map(function(todo){
        return(
          <Todo title={todo.title} description={todo.description} completed= {todo.completed}></Todo>
        )
      })}
      <Todo title={"Go to gym"} description={"go to gym at 6am"} completed= {"false"}></Todo>
    </div>
  )
}

function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.completed}</h2>
    </div>
  )
}

export default App
