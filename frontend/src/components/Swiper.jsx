import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../styles/Swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Card, Card2, Card3, Card4 } from "./Card";

export default () => {
  return (
    <>
      <div className="container_swipper" id="Blog">
        <h1 className="heading_Swipper">
          What our students are eying about us
        </h1>

        <Swiper
          className="Wrap_swiper"
          id="blog"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="conatiner_s" id="purple">
            {<Card />}
          </SwiperSlide>
          <SwiperSlide className="conatiner_s" id="yellow">
            {<Card2 />}
          </SwiperSlide>
          <SwiperSlide className="conatiner_s" id="pink">
            {<Card3 />}
          </SwiperSlide>
          <SwiperSlide className="conatiner_s" id="purple">
            {<Card4 />}
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </>
  );
};
