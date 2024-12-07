import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {


  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </div>
  )
}

function Count(){
  return(
    <div>
      <CountRenderer></CountRenderer>
      <Buttons></Buttons>
    </div>
  )
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return(
    <div>
      {count}
    </div>
  )
}

function Buttons(){
  const [count, setCount] = useRecoilState(countAtom)
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
