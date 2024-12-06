import { useContext, useState } from "react"
import { CountContext } from "./context";

// Prop Drilling

//        c1
//     c2    c3
//             c4
//                c5

// when c2 and c5 needs a state variable but c3 and c4 does not need them, they still have to pass it to child component i.e. c5. This is prop drilling
// it is not bad bcoz there is re-rendering, it is bad bcoz it makes the state too complex and code un-apealing and un-readable


// Context-API

// teleports state variable value to where it is needed without drilling the props to parent of child component who need the props
// wrap anyone that wants to use the teleported value inside provider

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}></Count>
      </CountContext.Provider>
    </>
  )
}

function Count({setCount}){
  return(
    <div>
      <CountRenderer></CountRenderer>
      <Buttons setCount={setCount}></Buttons>
    </div>
  )
}

function CountRenderer(){
  const count = useContext(CountContext)
  return(
    <div>
      {count}
    </div>
  )
}

function Buttons({setCount}){
  const count = useContext(CountContext)
  return(
    <div>
      <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <br />

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
    </div>
  )
}

export default App
