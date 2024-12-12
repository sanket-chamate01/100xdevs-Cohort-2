import "./App.css"
import { React, Component, useEffect, useState } from "react"

function App() {

  const [renderer, setRenderer] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setRenderer(false)
    }, 10000)
  })
  return (
    <div>
      {/* <MyFunctionalComponent></MyFunctionalComponent>
      <MyClassComponent></MyClassComponent> */}

      {renderer ? <MyFunctionalLifeCycleComponent/> : <div/>}  {/* unmounts component*/}
    </div>
  )
}

function MyFunctionalLifeCycleComponent(){
  useEffect(() => {
    console.log("component mounted");
    return() => {
      console.log("component unmounted")
    }
  }, []) // log then when dependencies changes, return and log of re-rendered useEffect

  return(
    <div>
      From inside function lifecycle component
    </div>
  )
}

function MyClassLifeCycleComponent(){
  componentDidMount(){
    console.log("component mounted")
  }
  componentWillUnmount(){
    console.log("component unmounted");
  }
  render(){
    return(
      <div>
        from inside class lifecycle component
      </div>
    )
  }
}

function MyFunctionalComponent(){ // for state management
  const [count, setCount] = useState(0)

  function press(){
    setCount(count + 1)
  }

  return(
    <div>
      <p>{count}</p>
      <button onClick={press}>Increment</button>
    </div>
  )
}

class MyClassComponent extends Component{
  constructor(props){
    super(props)
    this.state = { count: 0}
  }

  press = () => {
    this.setState({ count: this.state.count + 1})
  }

  render(){
    return(
      <div>
      <p>{this.state.count}</p>
      <button onClick={this.press}>Increment</button>
    </div>
    )
  }
}

export default App
