import { memo, useCallback, useState }  from "react";

function App(){
    const [count, setCount] = useState(0)

    // useCallback makes sure that the function/child component is not re-rendered again, use it when you want to memoize a function
    // if a=1 and b=1 then a==b, but that is not the case with functions, so useCallback let us know that the function is same and as there is no change in that function do not re-rendered it
    
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