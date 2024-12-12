
import './App.css'
import { useDimension } from './hooks/useDimensions'
import { useIsOnline } from './hooks/useIsOnline'
import { useMousePointer } from './hooks/useMousePointer'

function App() {

  // const isOnline = useIsOnline()

  // if(isOnline){
  //   return "You are online"
  // }

  // return ("You are ofline, please connect to the internet")

  // ------------------------------------------------------

  // const mousePointer = useMousePointer()

  // return(
  //   <div>
  //     Your mouse position is <b>X:</b>{mousePointer.x} and <b>Y:</b>{mousePointer.y}
  //   </div>
  // )

  // -------------------------------------------------------

  const dimension = useDimension()

  return(
    <div>
      Your Viewport Dimension is <b>Width = </b> {dimension.width} and <b>Height = </b> {dimension.height}
    </div>
  )
}

export default App
