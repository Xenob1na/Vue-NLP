<template>
    <transition name="fade">
    <div v-if="buttonShow" @click="click" class="button fixed right-[25px] bottom-[25px] cursor-pointer py-[10px] px-[10px] bg-white rounded-[50%]">
    <img src="/img/Arrow2.svg" alt="arrow" class="rotate-[180deg]">
    </div>
  </transition>
</template>

<script setup>
import { onMounted, ref } from 'vue';


const buttonShow = ref(false)


onMounted(() => {
    checkScrollPosition();
    window.addEventListener('scroll', checkScrollPosition);  
})

function checkScrollPosition() {
    buttonShow.value = window.pageYOffset > 10;
}

function click() {
      scroll({
        top: 0,
        behavior: "smooth"
      });
    }
</script>