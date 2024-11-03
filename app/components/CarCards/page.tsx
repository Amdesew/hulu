interface CarProps{
    img: string;
    name: string;
    seat: string;
    price: string;
    button: string;
}

const CarCards: React.FC<CarProps> = ({img, name, seat, price, button}) => {
    return(
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full h-48 object-cover" src={img} alt="Sunset in the mountains"/>
                <div className="px-6 py-2">
                    <div className="font-semibold mb-2">{name}</div>
                    <p className="text-gray-700 text-base" >
                    {seat}
                    </p>
                </div>
                <div className="px-6 pb-2">
                    <p className="text-gray-700 text-base py-2">{price}</p>
                    <button className="inline-block bg-green-500 rounded-full w-full py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">{button}</button>
                </div>
            </div>
        </div>
    )
}

export default CarCards;