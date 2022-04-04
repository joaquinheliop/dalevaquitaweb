import Item from "./navbar/Item"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faGear, faUser, faX } from "@fortawesome/free-solid-svg-icons"

import { useContext } from "react"
import { UserContext } from "../context/AppContext"


const Navbar = () => {

  const { closeSidebar, openSidebar, toggle } = useContext(UserContext)

  return (
    <div className="bg-white shadow-lg w-screen sticky top-0 z-40 h-16 flex justify-end px-4">

      {/* Boton del sidebar */}
      <div className="flex basis-1/2 justify-start items-center xl:hidden" onClick={toggle ? closeSidebar : openSidebar}>
        <div className="bg-white my-1 mx-0.5 h-8 w-7 hover:bg-green-500 hover:text-white flex items-center justify-center rounded" >
          {
            toggle ? (<FontAwesomeIcon icon={faX} />) : (<FontAwesomeIcon icon={faBars} />)
          }
        </div >
      </div >
      {/* Fin boton del sidebar */}

      {/* Items del navbar */}
      <div className="flex basis-1/2 justify-end items-center" >
        <Item><FontAwesomeIcon icon={faUser} /></Item>
        <Item><FontAwesomeIcon icon={faGear} /></Item>
      </div >
      {/* Fin items del navbar */}
    </div >

  )
}
export default Navbar