
import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './Atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
// try to learn about following apis - Suspense, ErrorBoundary

   const [todo] = useRecoilStateLoadable(todosAtomFamily(id));
   if (todo.state === "loading") {
      return <div>loading</div>
   }
   
   return (
    <>
      {todo.contents.id}
      <br />
      {todo.contents.todo}
      <br />
      {todo.contents.userId}
      <p>Status: {todo.contents.completed ? "Completed" : "Pending"}</p>
      -----------------------------------
      <br />
    </>
  )
}

export default App