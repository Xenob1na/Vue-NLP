<template>
    <div class="max-w-[1200px] mx-auto mt-[110px]">
        <div>
            <div class="mb-[34px]">
                <h2 class="text-[45px] sm:text-[40px] font-oswald font-bold leading-[130%] text-white" v-motion-pop-visible>
                    <span class="text-[#F39F30]">Часто задаваемые </span><br>вопросы
                    умений
                </h2>
            </div>
        </div>
        <Accordion title=" У меня нет опыта в программировании. Подойдёт ли мне этот курс?" class="mb-4"
            v-motion-pop-visible />
        <Accordion title="  А почему именно Python? Есть и другие языки программирования" class="mb-4"
            v-motion-pop-visible />
        <Accordion title="  Нужно ли знать математику? " class="mb-4"
            v-motion-pop-visible />
        <Accordion title="  Сколько часов в неделю мне нужно будет уделять курсу? " class="mb-4"
            v-motion-pop-visible />
    </div>
</template>

<script setup>
import Accordion from './UI/Accordion.vue';
</script>
