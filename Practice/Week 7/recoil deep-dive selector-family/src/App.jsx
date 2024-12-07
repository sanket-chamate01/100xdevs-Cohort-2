
import { todosAtomFamily } from './Atoms';
import { RecoilRoot, useRecoilState } from "recoil"


function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={3} />
    <Todo id={4} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.id}
      <br />
      {todo.todo}
      <br />
      {todo.userId}
      <p>Status: {todo.completed ? "Completed" : "Pending"}</p>

      -----------------------------------
      <br />
    </>
  )
}

export default App