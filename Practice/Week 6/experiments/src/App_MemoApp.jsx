/* eslint-disable react/prop-types */
import { memo, useState } from "react"

// memo does not let children re-render if they are not updated

function App() {

  const [title, titleState] = useState("My name is Sanket")

  function changeTitle(){
    titleState(`My name is ${Math.random()}`)
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title="My name is Sanket"></Header>
      <Header title="My middlename is Dilip"></Header>
      <Header title="My lastname is Chamate"></Header>
    </div>
  )

  // without memo

  // return ( 
  //   <>
  //     <HeaderWithButton></HeaderWithButton>
  //     <Header title="My name is Sanket"></Header>
  //   </>
  // )
}

function HeaderWithButton(){ // without memo
  const [title, titleState] = useState("My name is Sanket")

  function changeTitle(){
    titleState(`My name is ${Math.random()}`)
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={title}></Header>
    </div>
  )
}

const Header = memo(function Header({title}){ // React.memo
  return(
    <div>
      {title}
    </div>
  )
})

// without memo

// function Header({title}){
//   return(
//     <div>
//       {title}
//     </div>
//   )
// }

export default App
