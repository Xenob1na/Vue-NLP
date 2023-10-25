<script setup>
import Header from './components/Layout/Header.vue';
import { RouterView } from 'vue-router'
import Hero from './components/Hero.vue';
import AboutTheProfession from './components/AboutTheProfession.vue';
import SuitableForWhom from './components/SuitableForWhom.vue';
import TrainingProgram from './components/TrainingProgram.vue';
import EarningsWillGrow from './components/EarningsWillGrow.vue';
import EveryoneCan from './components/EveryoneCan.vue';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions.vue';
import BtnUpDown from './components/UI/BtnUpDown.vue';
import Footer from './components/Layout/Footer.vue';
</script>

<template>
    <Header />
    <BtnUpDown />
    <RouterView />
    <Footer />
</template>

