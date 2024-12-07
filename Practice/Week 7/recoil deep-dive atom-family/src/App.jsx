
import { RecoilRoot, useRecoilValue } from 'recoil'
import { todosAtomFamily } from './Atoms';

function App() {
  return(
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2} />
      <Todo id={2}></Todo>
    </RecoilRoot>
  )
}

function Todo({id}) {

  const todo = useRecoilValue(todosAtomFamily(id))

  return (
    <>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.description}
      <br />
      {'------------------------------------------'}
      <br />
    </>
  )
}

export default App