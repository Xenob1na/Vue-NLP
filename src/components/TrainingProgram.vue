<template>
    <div class="max-w-[1200px] mx-auto mt-[110px]" id="Program">
        <div>
            <h2 class="text-white text-[45px] font-oswald font-bold leading-[130%]" v-motion-pop-visible>Программа обучения</h2>
        </div>
        <div class="ml-[200px]">
            <article class="max-w-[970px] mt-[34px] mb-[34px] text-white text-[20px] font-lato font-medium" v-motion-pop-visible>
                Погружение в сферу ИТ. Вы изучите прикладную математику, познакомитесь с профессиями в разработке,
                популярными языками программирования и получите базовые навыки.
            </article>
        </div>
        <div>
            <Accordion title="Основной блок" class="mb-4" v-motion-pop-visible/>
            <Accordion title="Специализация Программист" class="mb-4" v-motion-pop-visible/>
            <Accordion title="Технологическая специализация" v-motion-pop-visible/>
        </div>
    </div>
</template>

<script setup>
import Accordion from './UI/Accordion.vue';
</script>
