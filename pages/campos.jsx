import CardCampo from "../components/content/CardCampo"
import CardAgregarCampo from "../components/content/CardAgregarCampo"
import Template from "../components/Template"

const campos = ({ data }) => {
    return (
        <Template>
            <div className="p-8 grid h-min xl:grid-cols-3 md:grid-cols-2 gap-4 overflow-auto">
                {data.map(({ campo, animales, duenios, cuigs }, i) => (
                    <CardCampo key={i} campo={campo} animales={animales} duenios={duenios} cuigs={cuigs} />
                ))}
                <CardAgregarCampo />
            </div>
        </Template>

    )
}
export default campos

export async function getStaticProps() {
    try {
        const res = await fetch("http://localhost:3000/api/campos")
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error);
    }
}