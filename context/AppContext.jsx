import { useState, createContext } from "react"

export const UserContext = createContext()

const AppContext = ({ children }) => {

    const [toggle, setToggle] = useState(false)

    const closeSidebar = () => setToggle(false)
    const openSidebar = () => setToggle(true)


    return (
        <UserContext.Provider value={{ toggle, closeSidebar, openSidebar }}>
            {children}
        </UserContext.Provider>
    )
}
export default AppContext