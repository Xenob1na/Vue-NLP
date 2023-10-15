<template>
    <div class="max-w-[1200px] mx-auto mt-[110px]">
        <div class="mb-[34px]">
            <h2 class="text-[45px] sm:text-[40px] font-oswald font-bold leading-[130%] text-white" v-motion-pop-visible>
                <span class="text-[#F39F30]">Каждый может</span><br>освоить Python с нуля 
            </h2>
        </div>
    </div>
    <div class="max-w-[1700px] mx-auto">
        <Slider />
    </div>
</template>

<script setup>
import Slider from './UI/Slider.vue';
</script>
