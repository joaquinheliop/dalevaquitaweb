import CardAgregarAnimal from "../components/content/CardAgregarCampo"
import Template from "../components/Template"


const animales = () => {
    return (
        <Template>
            <div className="p-8 grid h-min xl:grid-cols-5 gap-4 overflow-auto">
                <CardAgregarAnimal />
            </div>
        </Template>
    )
}
export default animales