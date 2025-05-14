function ModalButtonDown ({icon}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 p-2 w-full mt-5 border border-gray-300 rounded-lg cursor-pointer items-center">
            {icon}
            <button type="button" class="cursor-pointer bg-gray-50 text-gray-900 py-2.5 w-full px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg">Saída</button>   
        </div>
    )
}

export default ModalButtonDown