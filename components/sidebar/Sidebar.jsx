import Listitem from "./Listitem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCow, faGear, faList, faUser } from '@fortawesome/free-solid-svg-icons'

import { useContext } from "react"
import { UserContext } from "../../context/AppContext"


const Sidebar = () => {

    const { toggle } = useContext(UserContext)
    const toggleStyle = "absolute z-50 h-screen w-screen"

    return (
        <div className={`bg-white text-xs ${toggle ? toggleStyle : "z-10 hidden"} text-green-800 basis-2/12 shadow-xl opacity-100 px-6 py-8 flex-col items-center text-base xl:flex`}>
            <hr className="my-4 md:min-w-full"></hr>
            <div className="my-2 mx-0.5 h-8 w-full flex items-center">
                <h1 className="uppercase font-medium">General</h1>
            </div>
            <Listitem name="animales" href="" ><FontAwesomeIcon icon={faCow} /></Listitem>
            <Listitem name="campos" href="campos" ><FontAwesomeIcon icon={faList} /></Listitem>

            <hr className="my-4 md:min-w-full"></hr>

            <div className="my-2 mx-0.5 h-8 w-full flex items-center">
                <h1 className="uppercase font-medium">Configuracion</h1>
            </div>
            <Listitem name="usuario" ><FontAwesomeIcon icon={faUser} /></Listitem>
            <Listitem name="configuracion" ><FontAwesomeIcon icon={faGear} /></Listitem>

        </div>
    )
}
export default Sidebar