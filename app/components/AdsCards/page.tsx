interface CardProps{
    img: string;
    brand_name: string;
    about_brand: string;
    brand_link: string;
}

const AdsCard: React.FC<CardProps> = ({img, brand_name, about_brand, brand_link}) => {
    return(
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full h-48 object-cover" src={img} alt="Sunset in the mountains"/>
                <div className="px-6 py-2">
                    <div className="font-semibold mb-2">{brand_name}</div>
                    <p className="text-gray-700 text-base" >
                        {about_brand}
                    </p>
                </div>
                <div className="px-6 pb-2">
                    <a className="text-gray-700 text-base py-2" href={brand_link}>{brand_link}</a>
                </div>
            </div>
        </div>
    )
}

export default AdsCard;