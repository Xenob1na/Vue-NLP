<template>
    <swiper :slidesPerView="3" :spaceBetween="30" :freeMode="true" :pagination="{
        clickable: true,
    }" :modules="modules" class="mySwiper">
        <swiper-slide class="rounded-[22px] min-w-[600px]">
            <div class="flex gap-[50px]">
                <img src="/img/man-slider1.png" alt="man" class="max-w-[200px] py-4">
                <p class="max-w-[300px] text-[15px] font-lato font-medium leading-[130%] text-black mt-[90px]"> «Я работаю в крупной компании, у меня много интересных задач и отличные коллеги.<br> Я хотел стать Python-разработчиком, и это получилось — хотя у меня семья, дети, ипотека и мне давно не 20 лет».</p>
            </div>
        </swiper-slide>
        <swiper-slide class="rounded-[22px] min-w-[600px]">
            <div class="flex gap-[50px]">
                <img src="/img/man-slider2.png" alt="man" class="max-w-[200px] py-4">
                <p class="max-w-[300px] text-[15px] font-lato font-medium leading-[130%] text-black mt-[90px]"> «Я работаю в крупной компании, у меня много интересных задач и отличные коллеги.<br> Я хотел стать Python-разработчиком, и это получилось — хотя у меня семья, дети, ипотека и мне давно не 20 лет».</p>
            </div>
        </swiper-slide>
        <swiper-slide class="rounded-[22px] min-w-[600px]">
            <div class="flex gap-[50px]">
                <img src="/img/man-slider3.png" alt="man" class="max-w-[200px] py-4">
                <p class="max-w-[300px] text-[15px] font-lato font-medium leading-[130%] text-black mt-[90px]"> «Я работаю в крупной компании, у меня много интересных задач и отличные коллеги.<br> Я хотел стать Python-разработчиком, и это получилось — хотя у меня семья, дети, ипотека и мне давно не 20 лет».</p>
            </div>
        </swiper-slide>
        <swiper-slide class="rounded-[22px] min-w-[600px]">
            <div class="flex gap-[50px]">
                <img src="/img/man-slider4.png" alt="man" class="max-w-[200px] py-4">
                <p class="max-w-[300px] text-[15px] font-lato font-medium leading-[130%] text-black mt-[90px]"> «Я работаю в крупной компании, у меня много интересных задач и отличные коллеги.<br> Я хотел стать Python-разработчиком, и это получилось — хотя у меня семья, дети, ипотека и мне давно не 20 лет».</p>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [FreeMode, Pagination],
        };
    },
};
</script>

<style>
.swiper {
    max-width: 1900px;
}

.swiper-slide {
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>