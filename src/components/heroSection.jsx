import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const HeroSection = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((json) => setSlides(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {Array.isArray(slides) && slides.length > 0 && (
        <>
          <Swiper
            speed={500}
            effect="fade"
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".prevbutton",
              nextEl: ".nextbutton",
            }}
            pagination
            modules={[Navigation, Autoplay, Pagination]}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide?.id}>
                <figure className="bg-gray-500">
                  <img
                    className="h-[calc(100vh_-_88px)] w-full object-contain"
                    src={slide?.image}
                    alt={slide?.title}
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={`prevbutton group absolute text-[40px] text-white top-1/2 translate-y-1/2 left-1 lg:left-10 z-10`}
          >
            <BsChevronLeft className="transition-all duration-300 lg:group-hover:-translate-x-[5px]" />
          </button>
          <button
            className={`nextbutton group absolute text-[40px] text-white top-1/2 translate-y-1/2 right-1 lg:right-10 z-10`}
          >
            <BsChevronRight className="transition-all duration-300 lg:group-hover:translate-x-[5px]" />
          </button>
        </>
      )}
    </div>
  );
};

export default HeroSection;