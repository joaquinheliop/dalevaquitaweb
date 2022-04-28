import { faArrowCircleDown, faFilter, faMagnifyingGlass, faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BarraEmergenteAnimales = ({ handleChange, showModalFilter }) => {


    return (
        < div className="w-full h-fit p-5 bg-white shadow-lg rounded-t-xl flex flex-row uppercase z-50" >
            {/* Barra de herramientas */}
            <div className="flex flex-col w-full p-4 gap-4 ">
                {/* Busqueda */}
                <div className="flex flex-row gap-4">
                    <input type="text" placeholder="Buscar..." onChange={handleChange} className="w-full p-2 border-2 border-green-800 rounded text-black placeholder:text-black" />
                </div>
                {/* Fin busqueda */}
                {/* Botones */}
                <div className="flex flex-row">
                    <select name="select" className="w-full p-2 border-2 border-green-800 rounded text-black">
                        <option value="value1" selected>Ultima Pesada</option>
                        <option value="value2" >Historico</option>
                    </select>
                    <div className="w-fit flex flex-row items-center justify-center gap-4 pl-4">
                        <FontAwesomeIcon icon={faFilter} onClick={showModalFilter} className="text-green-800 hover:bg-green-800 hover:text-white p-2 rounded" />
                        <FontAwesomeIcon icon={faPen} className="text-green-800 hover:bg-green-800 hover:text-white p-2 rounded" />
                        <FontAwesomeIcon icon={faTrash} className="text-green-800 hover:bg-green-800 hover:text-white p-2 rounded" />
                        <FontAwesomeIcon icon={faArrowCircleDown} className="text-green-800 hover:bg-green-800 hover:text-white p-2 rounded" />
                    </div>
                </div>
                {/* Fin botones */}
            </div>
            {/* Fin barra de herramientas */}
        </div >
    )
}
export default BarraEmergenteAnimales