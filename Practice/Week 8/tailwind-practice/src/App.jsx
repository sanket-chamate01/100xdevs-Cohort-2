
// Tailwind works on Mobile first principle i.e. we first deal with smaller screens
// "sm:text-center" will keep text in center for screen > 640px
// "text-center sm:text-left" will keep text in center and when screen > 640px the text will go to left

function App() {

  return (
    <>
      <Flex></Flex>
      <br />
      <Grid></Grid>
      <br />
      <Breakpoints></Breakpoints>
      <br />
      <GridBreakpoint></GridBreakpoint>
    </>
  )
}

function Flex(){
  return(
    <div className="flex justify-between">
      <div className="bg-red-500 text-white">flex</div>
      <div className="bg-green-500 text-blue-900">flex</div>
      <div className="bg-yellow-500 text-red-800">flex</div>
    </div>
  )
}

function Grid(){
  return(
    <div className="grid grid-cols-10">                           {/* className="grid grid-cols-[50%,20%,30%]" */}
      <div className="bg-red-500 col-span-5">grid</div>         {/*  className="bg-red-500 " */}
      <div className="bg-green-500 col-span-2">grid</div>       {/*  className="bg-green-500 " */}
      <div className="bg-yellow-500 col-span-3">grid</div>      {/*  className="bg-yellow-500" */}
    </div>
  )
}

function Breakpoints(){ // green after small (screen > 640px), yello after screen > 768px. will remain red for 0px < screen < 640
  return(
    <div className="bg-red-500 sm:bg-green-500 md:bg-yellow-500 lg:bg-blue-500 xl:bg-orange-500 2xl:bg-lime-500">
      Breakpoints
    </div>
  )
}

function GridBreakpoint(){ 
  return(
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="bg-red-500">GridBreakpoint</div>        
      <div className="bg-green-500">GridBreakpoint</div>       
      <div className="bg-yellow-500">GridBreakpoint</div> 
    </div>
  )
}
export default App
