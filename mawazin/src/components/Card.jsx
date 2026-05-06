function Card({id, name, img, discription, setStorage}) {
    return (
        <div className="bg-white w-60 h-80 rounded-2xl text-center py-4 font-bold ">
            <h1>{name}</h1>
            <div className="flex justify-center">
                <div className="h-52 overflow-hidden">
                    <img src={img} />
                </div>
            </div>
            <h3 className="py-2">{discription}</h3>
            <button className="bg-blue-500 text-white px-8 py-0.5 rounded" onClick={() => setStorage(id)}>add</button>
        </div>
    )
}
export default Card