import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface House {
  image: string;
  details: string;
  bedroom: number;
  bathroom: number;
  garage: number;
  area_square: number;
  location: string;
}

export default function RentHouses({ houses }: { houses: House[] }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Rent Available Houses</h2>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        className="mySwiper"
      >
        {houses.map((house, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={house.image} 
                alt={house.details} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{house.details}</h3>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-sm">
                    <i className="fas fa-bed mr-2"></i>
                    {house.bedroom} Beds
                  </span>
                  <span className="text-sm">
                    <i className="fas fa-bath mr-2"></i>
                    {house.bathroom} Baths
                  </span>
                  <span className="text-sm">
                    <i className="fas fa-car mr-2"></i>
                    {house.garage} Garage
                  </span>
                </div>
                <div className="text-sm mb-2">
                  <i className="fas fa-ruler-combined mr-2"></i>
                  {house.area_square} sq.m
                </div>
                <div className="text-sm mb-2">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  {house.location}
                </div>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
