import CardAnimal from "../components/content/CardAnimal"
import BarraEmergenteAnimales from "../components/navbar/BarraEmergenteAnimales"
import Template from "../components/Template"

export default function Home({ data }) {
  return (
    <Template>
      <div className="p-8 grid h-min min-w-max xl:grid-cols-5 gap-4 relative">
        {/* Titulos */}
        <div className="w-full h-fit col-span-5 p-5 rounded-xl flex flex-row uppercase ">
          <h3 className="font-semibold w-full text-center">caravana</h3>
          <h3 className="font-semibold w-full text-center">rfid</h3>
          <h3 className="font-semibold w-full text-center">campo</h3>
          <h3 className="font-semibold w-full text-center">fecha</h3>
          <h3 className="font-semibold w-full text-center">peso</h3>
        </div>
        {/* Fin titulos */}

        {/* Animales */}
        {data.map(({ caravana, rfid, campo, fecha, peso }, i) => (
          <CardAnimal key={i} caravana={caravana} rfid={rfid} campo={campo} fecha={fecha} peso={peso} />
        ))}
        {/* Fin animales */}
      </div>
    </Template >
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3000/api")
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
