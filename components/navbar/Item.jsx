const Item = ({ children }) => {
    return (
        <div className="my-1 mx-0.5 h-8 w-7 hover:bg-green-500 hover:text-white text-green-800 flex items-center justify-center rounded" >
            {children}
        </div >
    )
}
export default Item