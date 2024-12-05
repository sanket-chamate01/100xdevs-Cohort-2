import { useEffect, useRef } from "react"

function App(){
    const divRef = useRef();

    useEffect(() =>{
        setTimeout(() => {
            console.log(divRef.current);
            divRef.current.innerHTML = 10
        }, 5000)
    }, [])

    const value = 20000;

    return(
        <div>
            Your incomeTax return is 
            <p ref={divRef}>{value}</p>
        </div>
    )
}

export default App