import { useState } from "react"

function App() {

  const [count, setCount] = useState(0); // state

  return ( // component
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton(props){ // component

  function onClickHandler(){
    props.setCount(props.count + 1) // re-rendering component state
  }

  return ( // component
      <button onClick={onClickHandler}>Counter {props.count}</button> 
  )
}

export default App
