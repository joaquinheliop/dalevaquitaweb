import CardAnimal from "../components/content/CardAnimal"
import Template from "../components/Template"
import BarraEmergenteAnimales from "../components/navbar/BarraEmergenteAnimales"
import { useState } from "react"
import Modal from "../components/Modal"
import Filter from "../components/modals/Filter"

export default function Home({ data }) {

  const [dataFilter, setDataFilter] = useState(data)
  const [filter, setFilter] = useState(false)

  const handleChange = (e) => {
    const { value } = e.target
    setDataFilter(data.filter((element) => (element.caravana.toUpperCase().includes(value.toUpperCase()) || element.rfid.toUpperCase().includes(value.toUpperCase()))))
  }

  const showModalFilter = () => {
    filter ? setFilter(false) : setFilter(true)
  }


  return (
    <Template>
      {filter && <Modal><Filter show={showModalFilter} /></Modal>}
      <div className="p-8 grid h-min min-w-max w-full xl:grid-cols-5 gap-4 ">
        {/* Barra de herramientas */}
        <div className="col-span-5 mb-4">
          <BarraEmergenteAnimales handleChange={handleChange} showModalFilter={showModalFilter} />
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
  /* try {
    const res = await fetch("http://localhost:3000/api")
    const data = await res.json()
  } catch (error) {
    console.log(error);
  } */
  const data = [
    { caravana: 'RP-438', rfid: '032000000002724', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-439', rfid: '032000000002725', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-440', rfid: '032000000002726', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-441', rfid: '032000000002727', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-442', rfid: '032000000002728', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-443', rfid: '032000000002729', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-444', rfid: '032000000002730', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-445', rfid: '032000000002731', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'ADA', rfid: '032000000002731', campo: 'Cama', fecha: '03/03/2022', peso: '350 Kg' }
  ]
  return {
    props: {
      data
    }
  }
}
