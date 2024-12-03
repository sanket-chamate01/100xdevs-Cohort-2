import { useState } from "react"


let id = 3

function App() {
  
  const [todos, setTodos] = useState([{
    id: 1,
    title: "a",
    description: "A"
  }, {
    id: 2,
    title: "b",
    description: "B"
  }, {
    id: 3,
    title: "c",
    description: "C"
  }])

  function addTodo(){
    setTodos([...todos, {
      id: ++id,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map( (todo) => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
    </div>
  )
}

function Todo({title, description}){
  return(
    <div>
      <h1>
        {title}
      </h1>
      <h4>
        {description}
      </h4>
    </div>
  )
}

export default App
