


import Stroy from "./Story";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const MainContainerStories = ()=> {
    return (
        <div className="story-border fixed top-[5rem] w-screen h-36 px-2 flex items-center justify-center">
            <Swiper  className="h-full"
                     spaceBetween={0}
                     slidesPerView={4}
                     onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide className="flex items-center justify-center"><Stroy/></SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center"><Stroy/></SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center"><Stroy/></SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center"><Stroy/></SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center"><Stroy/></SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center"><Stroy/></SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center"><Stroy/></SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center"><Stroy/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default MainContainerStories;