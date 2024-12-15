import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// import house1 from "../assets/images/house1.jpg";
import house2 from "../assets/images/house2.jpg";
// import house3 from "../assets/images/house3.jpg";

const Banner = () => {
    return (
        <div className="flex w-full bg-gray-800 text-white pt-[72px]">
            <div className="w-1/2 flex flex-col justify-center items-start p-10">
                <h1 className="text-4xl font-bold mb-4">Produk Baru</h1>
                <p className="text-lg mb-4">Belanja produk terbaru kami dengan berbagai pilihan terbaik.</p>
                <hr className="border-t border-gray-500 w-1/4" />
                <div className="mt-4">
                    <button className="bg-white text-black py-2 px-6 hover:bg-gray-300 transition duration-300">
                        Explore Now
                    </button>
                </div>
            </div>

            <div className="w-1/2 relative">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img
                            src={house2}
                            alt="Product 1"
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={house2}
                            alt="Product 2"
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={house2}
                            alt="Product 3"
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;