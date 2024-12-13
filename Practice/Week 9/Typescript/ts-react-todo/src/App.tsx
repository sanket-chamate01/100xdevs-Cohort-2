
import './App.css'

function App() {

  return (
    <div>
      <Todo title='wake up early' description='wake up early in morning' done={true}></Todo>
    </div>
  )
}

interface Todos {
  title: string,
  description: string,
  done: boolean
}

function Todo(todos: Todos) {
  return(
    <div>
      <h3>{todos.title}</h3>
      {todos.description} {todos.done ? <b>Completed</b> : <b>Pending</b>}
    </div>
  )
}

export default App
