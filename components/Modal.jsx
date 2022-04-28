const Modal = ({ children }) => {
    return (
        <div className="fixed left-0 top-0 m-auto z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="w-1/4 h-1/4 bg-white shadow-lg ">{children}</div>
        </div>
    )
}
export default Modal