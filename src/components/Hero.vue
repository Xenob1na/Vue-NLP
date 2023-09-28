<template>
    <div class="max-w-[1200px] mx-auto flex justify-between" v-motion-pop-visible-once>
        <div class="mt-[162px]">
            <div>
                <h1 class="text-[50px] font-oswald font-bold text-[#fff]">Инженер-программист <span
                        class="text-[#F39F30]">Python</span></h1>
                <article class="max-w-[670px] mt-[10px] text-[20px] font-lato font-medium text-white leading-[130%]">
                    Станьте инженером-программистом на одном из самых простых и популярных языков программирования Python.
                    Вы
                    сможете писать сайты, приложения, нейросети и программы для научных исследований и работы, на которую вы
                    сможете устроиться после 9 месяцев обучения.
                </article>
            </div>
            <div class="mb-[45px] mt-[30px]">
                <button
                    class="bg-[#fff] text-[#0650E6] text-[20px] font-oswald font-medium py-4 px-6 hover:bg-[#0650E6] hover:text-[#fff] delay-[100ms] transition-all" @click="OpenModel">Записаться
                    на курс</button>
            </div>
            <div class="flex gap-5">
                <div>
                    <p class="text-[20px] text-[#F39F30] font-oswald font-bold leading-[130%]">Длительность:</p>
                    <p class="mt-[10px] text-[18px] font-lato font-medium leading-[130%] text-white">6 Месяцев</p>
                </div>
                <div>
                    <p class="text-[20px] text-[#F39F30] font-oswald font-bold leading-[130%]">Старт:</p>
                    <p class="mt-[10px] text-[18px] font-lato font-medium leading-[130%] text-white">1 октября</p>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <img src="/img/man.png" alt="man" class="cssanimation hu__hu__">
        </div>
    </div>
    <Modal v-if="IsModal" @close="CloseModal" />
</template>

<script setup>
import { ref } from 'vue';
import Modal from './UI/Modal.vue';

const IsModal = ref(false);

function OpenModel() {
    IsModal.value = true
}

function CloseModal() {
    IsModal.value = false
    document.body.classList.toggle('no-scroll')
}
</script>
