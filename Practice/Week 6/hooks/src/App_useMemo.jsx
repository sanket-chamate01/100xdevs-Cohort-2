import { useEffect, useMemo, useState } from "react"

function App(){

    const [counter, setCounter] = useState(0)
    const [value, setValue] = useState(0)

    // this could have been a better solution but when value changes, finalValue also changes so does it's state which cause another re-render, so 2 instead of 1

    // const [finalValue, setFinalValue] = useState(0)
    // useEffect(() => {
    //     let a = 0;
    //     for(let i = 0; i - 1 < value; i++){
    //         a = a + i;
    //     }
    //     setFinalValue(a)
    // }, [value])

    // clicking on counter re-renders the for loop, even though we didn't change the input value
    // let a = 0;
    // for(let i = 0; i - 1 < value; i++){
    //     a = a + i;
    // }

    let a = useMemo(() => { // use this incase of value and use useCallback incase of function
        let a = 0;
        for(let i = 0; i - 1 < value; i++){
            a = a + i;
        }
        return a;
    }, [value]) // this expensive function will only run when input value(value) changes

    const getInput = (event) => {
        const v = event.target.value;
        setValue(v);
    }

    const count = () => {
        setCounter(counter + 1)
    }

    return(
        <div>
            <input type="text" onChange={getInput}/><br />
            {/* <p>Sum is {finalValue}</p><br /> */}
            <p>Sum is {a}</p><br />
            <button onClick={count}>Counter is {counter}</button>
        </div>
    )
}

export default App