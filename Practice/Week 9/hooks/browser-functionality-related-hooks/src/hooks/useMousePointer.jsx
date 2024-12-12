import { useEffect, useState } from "react";

export function useMousePointer(){
    const [position, setPosition] = useState({x: 0, y: 0})

    const handleMouseMovement = (e) => {
        setPosition({ x: e.clientX, y: e.clientY})
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMovement)
        return () => {
            window.addEventListener('mousemove', handleMouseMovement)
        }
    }, [])

    return position
}