<template>
    <header class="max-w-[1200px] mx-auto flex justify-between items-center mt-4">
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
            <button class="bg-[#FFF] text-[20px] text-[#0650E6] px-10 py-3 font-bold font-oswald hover:bg-[#0650E6] hover:text-[#fff] delay-[100ms] transition-all">Записаться</button>
        </div>
    </header>
    <hr class="max-w-[1200px] mx-auto mt-5">
</template>

<script setup>
import { ref } from 'vue';

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
