import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { useEffect, useState } from "react";


  const Testimonials = ({ data }) => {
    const [Testimonials, setTestimonials] = useState([]); // menyimpan data testi
    const [loading, setLoading] = useState([true]);

    // Ambil data dari axios
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setTestimonials(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error fetching testimonials:", error);
        setLoading(false);
      });
    }, []);

    if (loading){
      return <div>Loading... </div>
    }

    return (
        <div className="my-12 max-w-4xl mx-auto shadow-md">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {Testimonials.slice(0, 5).map((Testimonial) => (
            <SwiperSlide key={Testimonial.id}>
              <div className="flex flex-col items-center text-center p-14 bg-gray-50 rounded-lg shadow-md">
                <img
                  src={Testimonial.image || "https://via.placeholder.com/100"}
                  alt={Testimonial.title}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="italic text-gray-600 mb-4">"{Testimonial.body}"</p>
                <h3 className="font-semibold text-gray-800">{Testimonial.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  export default Testimonials;