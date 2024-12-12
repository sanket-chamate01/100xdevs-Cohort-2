import { useState } from 'react'
import './App.css'
import { useInterval } from './hooks/useInterval'
import { useDebouncing } from './hooks/useDebouncing'

function App() {

  // const [count, setCount] = useState(0)

  // useInterval(() => {
  //   setCount(c => c + 1)
  // }, 1000)

  // return (
  //   <div>
  //     Timer is at {count}
  //   </div>
  // )

  // ---------------------------------------------

  // can be used for searchbar
  // debouncing is delay when we type in searchbar to search something

  const [input, setInput] = useState("")
  const debounce = useDebouncing(input, 1000)

  return(
    <div>
      <input type="text" value={input} placeholder='Search....' onChange={(e) => {
        setInput(e.target.value)
      }}/>
    </div>
  )
}

export default App
