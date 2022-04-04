const CardCampo = ({ campo, animales, duenios, cuigs }) => {
    return (
        <div className="w-full h-full bg-white shadow-lg p-5 rounded-xl flex flex-col">
            <div className="flex flex-col basis-full">
                <h2 className="uppercase text-center font-bold mb-4 ">{campo}</h2>
                <h3 className="capitalize text-left font-semibold">Cantidad de animales: {animales}</h3>
                <h3 className="capitalize text-left font-semibold">Cantidad de dueños: {duenios}</h3>

                <div className="mt-4 flex flex-row gap-2">
                    {cuigs.map((item, i) => (

                        <div key={i} className="capitalize text-center font-medium w-fit px-2 border-2 rounded">
                            <h3>
                                {item}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-row mt-8 gap-4 justify-end">
                <button className="p-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-lg">Editar</button>
                <button className="p-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-lg">Eliminar</button>
            </div>
        </div>
    )
}
export default CardCampo