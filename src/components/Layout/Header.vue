<template>
    <header id="Home" class="max-w-[1200px] mx-auto flex justify-between items-center mt-4 lg:mx-5">
        <div>
           <router-link to="/">
            <img src="/img/logo.svg" alt="logo">
           </router-link>
        </div>
        <nav class="sm:hidden">
            <ul class="flex gap-7 topmenu">
                <li class="text-[20px] text-white font-bold font-oswald hover:underline hover:decoration-[#F39F30]"
                    v-for="(navs, index) in nav.slice(0, 3)" key="index">
                    <a :href="navs.path">{{ navs.name }}</a>
                </li>
                <li class="text-[20px] text-white font-bold font-oswald hover:underline hover:decoration-[#F39F30]"><a href="">Контакты</a>
                    <ul class="submenu">
                        <li class="text-[20px] text-white font-bold font-oswald hover:underline hover:decoration-[#F39F30]"
                             key="index">
                            <a href="#Contact">Контакты</a>
                        </li>
                        <li class="text-[20px] text-white font-bold font-oswald hover:underline hover:decoration-[#F39F30]">
                            <router-link to="/About">Обо Мне</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div class="md:hidden">
            <button
                class="bg-[#FFF] text-[20px] text-[#0650E6] px-10 py-3 font-bold font-oswald hover:bg-[#0650E6] hover:text-[#fff] delay-[100ms] transition-all"
                @click="OpenModel">Записаться</button>
        </div>
        <BurgerBtn @click="OpenBurger" class="hidden sm:block" />
    </header>
    <BurgerModal @close="CloseBurger" v-if="IsBurger" />
    <hr class="max-w-[1200px] mx-auto mt-5">
    <Modal v-if="IsModal" @close="CloseModal" />
</template>

<script setup>
import { ref } from 'vue';
import Modal from '../UI/Modal.vue'
import BurgerBtn from '../UI/BurgerBtn.vue'
import BurgerModal from '../UI/BurgerModal.vue'

const IsModal = ref(false);
const IsBurger = ref(false);

function OpenBurger() {
    IsBurger.value = true
}

function CloseBurger() {
    IsBurger.value = false
    document.body.classList.toggle('no-scroll')
}

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
    {
        name: 'Обо Мне',
        path: '/About'
    },
])


</script>
