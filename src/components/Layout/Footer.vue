<template>
    <footer class="max-w-[1200px] mx-auto mt-[110px]" id="Contact">
        <div>
            <h2 class="text-[45px] font-oswald font-bold leading-[130%] text-white" v-motion-pop-visible>
                <span class="text-[#F39F30]">Остались вопросы</span><br>
                и не знаешь как быть ?
            </h2>
        </div>
        <div class="ml-[200px] flex justify-between my-[34px] items-center">
            <div>
                <p class="max-w-[470px] text-[20px] font-lato font-medium text-white" v-motion-pop-visible>Напиши мне или оставь заявку, и я полностью проконсультирую вас по всем вашим вопросам</p>
            </div>
            <div>
                <button class="bg-[#fff] text-[#0650E6] text-[20px] font-oswald font-medium py-4 px-6 hover:bg-[#0650E6] hover:text-[#fff] delay-[100ms] transition-all" v-motion-pop-visible @click="OpenModel">Оставить заявку</button>
            </div>
        </div>
        <div>
            <hr>
            <div class="flex gap-[30px] my-[34px]" v-motion-pop-visible>
                <p class="text-white text-[25px] font-oswald font-bold uppercase"><a href="https://www.viber.com/ru/">Viber</a></p>
                <p class="text-white text-[25px] font-oswald font-bold uppercase"><a href="https://www.whatsapp.com/?lang=ru_RU">Whatsapp</a></p>
                <p class="text-white text-[25px] font-oswald font-bold uppercase"><a href="https://web.telegram.org/k/">Telegram</a></p>
            </div>
            <hr>
        </div>
        <div class="my-[34px]">
            <p class="text-white text-[20px] font-bold font-oswald text-center" v-motion-pop-visible>©NLP</p>
        </div>
    </footer>
    <Modal 
    v-if="IsModal"
    @close="CloseModal"/>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '../UI/Modal.vue';

const IsModal = ref(false);

function OpenModel() {
  IsModal.value = true
}

function CloseModal() {
    IsModal.value = false
    document.body.classList.toggle('no-scroll')
}
</script>