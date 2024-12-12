import { useEffect, useState } from "react";

export function useDimension(){
    const [dimension, setDimension] = useState({width: window.innerWidth, height: innerHeight})

    const handleDimensions = () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    useEffect(() => {
        window.addEventListener('resize', handleDimensions)
        return () => {
            window.addEventListener('resize', handleDimensions)
        }
    }, [])

    return dimension
}