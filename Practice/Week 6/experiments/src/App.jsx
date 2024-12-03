
function App(){
    return(
        <CardWrapper>hellllo</CardWrapper>
    )
}   

function CardWrapper({children}){
    return(
        <div style={{border: "2px solid black"}}>
            {children}
        </div>
    )
}

export default App