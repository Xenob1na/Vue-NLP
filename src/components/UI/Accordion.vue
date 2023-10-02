<template>
    <Transition>
        <div @click="toggleAcc" class="max-w-[970px] lg:max-w-[1160px] bg-white lg:ml-0 ml-[200px] py-[22px] rounded-[20px] cursor-pointer">
            <div class="flex justify-between">
                <span class="ml-[44px] xs:ml-3 xs:text-[22px] text-[25px] font-oswald font-medium text-black">{{ title }}</span>
                <img class="mr-[44px]" src="/img/Arrow1.svg" alt="Arrow1" v-if="!openAcc">
                <img class="mr-[44px]" src="/img/Arrow2.svg" alt="Arrow1" v-else>
            </div>
            <div v-if="openAcc">
                <ul class="text-black text-[20px]  font-lato font-medium list-disc ml-[45px] mt-5">
                    <li>Погружение в Python</li>
                    <li>Веб-вёрстка HTML / CSS</li>
                    <li>Микрофреймворки Flask и FastAPI</li>
                    <li>Фреймворк Django</li>
                </ul>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref } from 'vue';

const openAcc = ref(false)

const toggleAcc = () => {
    openAcc.value = !openAcc.value
}

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
