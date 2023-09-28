<template>
    <header id="Home" class="max-w-[1200px] mx-auto flex justify-between items-center mt-4">
        <div>
            <img src="/img/logo.svg" alt="logo">
        </div>
        <nav>
            <ul class="flex gap-7">
                <li class="text-[20px] text-white font-bold font-oswald hover:underline hover:decoration-[#F39F30]" v-for="(navs, index) in nav" key="index">
                    <a :href="navs.path">{{ navs.name }}</a>
                </li>
            </ul>
        </nav>
        <div>
            <button class="bg-[#FFF] text-[20px] text-[#0650E6] px-10 py-3 font-bold font-oswald hover:bg-[#0650E6] hover:text-[#fff] delay-[100ms] transition-all" @click="OpenModel">Записаться</button>
        </div>
    </header>
    <hr class="max-w-[1200px] mx-auto mt-5">
    <Modal 
    v-if="IsModal"
    @close="CloseModal"/>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '../UI/Modal.vue'

const IsModal = ref(false);

function OpenModel() {
  IsModal.value = true
}

function CloseModal() {
    IsModal.value = false
    document.body.classList.toggle('no-scroll')
}

const nav = ref([
    {
        name: 'Главная',
        path: '#Home'
    },
    {
        name: 'Преимущества',
        path: '#Advantages'
    },
    {
        name: 'Программа',
        path: '#Program'
    },
    {
        name: 'Контакты',
        path: '#Contact'
    },
])
</script>
