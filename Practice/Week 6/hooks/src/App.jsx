import { memo, useCallback, useState }  from "react";

function App(){
    const [count, setCount] = useState(0)

    const buttonClick = useCallback(() => {
        console.log("child clicked")
    }, [])

    // function buttonClick() {
    //     console.log("child clicked")
    // }

    return(
        <div>
            <ButtonComponent inputFunction={buttonClick}></ButtonComponent>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click me {count}</button>
        </div>
    )
}

const ButtonComponent = memo(({inputFunction}) => {
    console.log("child render");
    
    return(
        <div>
            <button onClick={inputFunction}>Button Clicked</button>
        </div>
    )
})

export default App