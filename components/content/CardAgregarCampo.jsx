import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AgregarCardCampo = () => {
    return (
        <div className="w-full h-full bg-white shadow-lg p-5 rounded-xl flex items-center justify-center text-5xl text-green-500 hover:bg-green-500 hover:text-white hover:cursor-pointer">
            <FontAwesomeIcon icon={faPlus} />
        </div>
    )
}
export default AgregarCardCampo