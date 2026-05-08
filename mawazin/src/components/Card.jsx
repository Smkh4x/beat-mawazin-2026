function Card({ item ,rmSt , classConfig, buttonName}) {
    return (
        <div className="bg-white w-60 h-80 rounded-2xl text-center py-4 font-bold ">
            <h1>{item.name}</h1>
            <div className="flex justify-center">
                <div className="h-52 overflow-hidden">
                    <img src={item.img} />
                </div>
            </div>
            <h3 className="py-2">{item.time}</h3>
        <button className={classConfig}  onClick={() => rmSt(item.id)}>{buttonName}</button>
        </div>
    )
}
export default Card

