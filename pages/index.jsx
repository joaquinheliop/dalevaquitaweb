import CardAnimal from "../components/content/CardAnimal"
import Template from "../components/Template"
import BarraEmergenteAnimales from "../components/navbar/BarraEmergenteAnimales"
import { useState } from "react"

export default function Home({ data }) {

  const [dataFilter, setDataFilter] = useState(data)

  const handleChange = (e) => {
    const { value } = e.target
    setDataFilter(data.filter((element) => (element.caravana.toUpperCase().includes(value.toUpperCase()) || element.rfid.toUpperCase().includes(value.toUpperCase()))))
  }


  return (
    <Template>
      <div className="p-8 grid h-min min-w-max w-full xl:grid-cols-5 gap-4 ">
        {/* Barra de herramientas */}
        <div className="col-span-5 mb-4">
          <BarraEmergenteAnimales handleChange={handleChange} />
          <div className="w-full h-fit bg-green-800 text-white shadow-lg col-span-5 p-5 flex flex-row uppercase rounded-b-xl">
            <h3 className="font-semibold w-full text-center">caravana</h3>
            <h3 className="font-semibold w-full text-center">rfid</h3>
            <h3 className="font-semibold w-full text-center">campo</h3>
            <h3 className="font-semibold w-full text-center">fecha</h3>
            <h3 className="font-semibold w-full text-center">peso</h3>
          </div>
        </div>
        {/* Fin barrra de herramientas */}
        {/* Titulos */}

        {/* Fin titulos */}

        {/* Animales */}
        {dataFilter.map(({ caravana, rfid, campo, fecha, peso }, i) => (
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
