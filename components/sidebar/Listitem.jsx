
import Link from "next/link"
import { useContext } from "react"
import { UserContext } from "../../context/AppContext"


const Listitem = ({ name, href, children }) => {

    const { closeSidebar } = useContext(UserContext)

    return (
        <Link href={`/${href}`}>
            <div className="my-1 mx-0.5 h-10 w-full flex items-center hover:bg-green-500  hover:text-white" onClick={closeSidebar}>
                <div className="h-full px-4 cursor-pointer w-full flex items-center rounded">
                    {children}
                    <a className="ml-4 font-medium uppercase">{name}</a>
                </div>
            </div>
        </Link>
    )
}
export default Listitem