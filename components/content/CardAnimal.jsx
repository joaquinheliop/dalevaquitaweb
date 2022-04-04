const CardAnimal = ({ caravana, rfid, campo, fecha, peso }) => {
    return (
        <div className="w-full h-full col-span-5 bg-white shadow-lg p-5 rounded-xl flex flex-row hover:bg-green-400 hover:text-white hover:cursor-pointer">
            <h3 className="capitalize font-semibold w-full text-center">{caravana}</h3>
            <h3 className="capitalize font-semibold w-full text-center">{rfid}</h3>
            <h3 className="capitalize font-semibold w-full text-center">{campo}</h3>
            <h3 className="capitalize font-semibold w-full text-center">{fecha}</h3>
            <h3 className="capitalize font-semibold w-full text-center">{peso}</h3>
        </div>
    )
}
export default CardAnimal