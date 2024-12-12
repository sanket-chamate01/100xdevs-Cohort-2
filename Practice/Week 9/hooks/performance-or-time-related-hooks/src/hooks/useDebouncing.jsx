import { useEffect } from "react";
import { useState } from "react";

export function useDebouncing(value, delay){

    const [input, setInput] = useState("")

    useEffect(() => {
        const interval = setTimeout(() => {
            setInput(value)
        }, delay)
        return () => {
            clearTimeout(interval)
        }
    }, [value, delay])

    return input
}