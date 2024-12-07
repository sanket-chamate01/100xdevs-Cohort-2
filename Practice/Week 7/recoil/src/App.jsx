import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {


  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </div>
  )
}

function Count(){ // this is not re-rendering anymore
  return(
    <div>
      <CountRenderer></CountRenderer>
      <Buttons></Buttons>
    </div>
  )
}

function CountRenderer(){ // only this re-renders
  const count = useRecoilValue(countAtom)
  return(
    <div style={{display: "flex", gap: "10px"}}>
      {count}
      <EvenCountRenderer></EvenCountRenderer>
    </div>
  )
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector)

  return(
    <div>
      {isEven ? "It is Even" : null}
    </div>
  )
}

function Buttons(){
  // const [count, setCount] = useRecoilState(countAtom) // buttons will re-render, but we don't really need count variable
  const setCount = useSetRecoilState(countAtom);

  return(
    <div>
      <button style={{marginRight: "5px"}} onClick={() => {
      setCount(count => count - 1)
      }}>Decrease</button>

      <button onClick={() => {
        setCount(count => count + 1)
      }}>Increase</button>
    </div>
  )
}

export default App
