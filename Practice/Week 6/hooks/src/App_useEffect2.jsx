import { useEffect, useState } from "react"
import axios from "axios"

function App() {

    const [selectedId, setSelectedId] = useState(1);

    const getTodo = (event) => {
        const value = event.target.textContent;
        setSelectedId(value); 
    };
    
    return (
        <div>
            <button onClick={getTodo}>1</button>
            <button onClick={getTodo}>2</button>
            <button onClick={getTodo}>3</button>
            <button onClick={getTodo}>4</button>
            {/* <Todo id={selectedId}></Todo> */}
            {<Todo id={selectedId} />}
        </div>
    )
}

function Todo({id}){

    const [todo, setTodo] = useState([])

    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/todos?id=" + id)
        .then((res) => {
            setTodo(res.data[0])
        })
    }, [id])

    return(
      <div>
        <h1>{todo.id}</h1>
        <h2>
          {todo.title}
        </h2>
      </div>
    )
}

export default App
