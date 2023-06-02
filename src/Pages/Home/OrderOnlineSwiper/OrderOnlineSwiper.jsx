// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// Import images
import img1 from "../../../assets/OnlineOrder/slide1.jpg";
import img2 from "../../../assets/OnlineOrder/slide2.jpg";
import img3 from "../../../assets/OnlineOrder/slide3.jpg";
import img4 from "../../../assets/OnlineOrder/slide4.jpg";
import img5 from "../../../assets/OnlineOrder/slide5.jpg";

// import required modules
import { Pagination } from "swiper";
import HeadingTitle from "../../../Shared/HeadingTitle/HeadingTitle";
const OrderOnlineSwiper = () => {
  return (
    <div className="py-28">
      <HeadingTitle
        subTitle={"From 11:00am to 10:00pm"}
        title={"ORDER ONLINE"}
      ></HeadingTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderOnlineSwiper;
