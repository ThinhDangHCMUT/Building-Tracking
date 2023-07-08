import { createContext, useState } from "react"

export const FloorContextAPI = createContext()

export const FloorContext = ({ children }) => {
    const [floor, setFloor] = useState("Floor 1")

    const handleSetFloor = (floor) => {
        setFloor(floor)
    }

    return (
        <FloorContextAPI.Provider
            value={{
                floor,
                handleSetFloor,
            }}
        >
            {children}
        </FloorContextAPI.Provider>
    )
}