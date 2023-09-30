<template>
    <div>
        <div class="modal fixed z-[1] left-0 top-0 w-[100%] h-[100%] pt-[50px] overflow-auto">
            <div class="bg-[#fefefe]  rounded-[5px] w-[30%] mx-auto lgMax:w-[50%] lg2:w-[60%] lgMax1:w-[40%]">
                <div class="container">
                    <span class="close text-[#aaa] float-right text-[28px] mb-[30px] font-semibold"
                        @click="$emit('close')">&times;</span>
                    <form class="model-content" ref="input" @submit.prevent="sendEmail">
                        <input type="text"
                            class="outline-none    font-normal  leading-4 text-[#212529] font-lato bg-clip-padding border-solid  rounded-[8px]"
                            placeholder="Ваше Имя" name="to_name" required v-model="name">
                        <input type="email"
                            class="outline-none   font-normal  leading-4 text-[#212529] font-lato bg-clip-padding border-solid   rounded-[8px]"
                            placeholder="Ваша почта" name="email_id" required v-model="email">
                        <button
                            class="text-[#fff] bg-[#0650E6] w-[100%] px-10 py-4 font-bold font-oswald rounded-[5px] hover:bg-[#1452B0] text-[18px] text-center">Отправить</button>
                    </form>
                    <div v-if="error"
                        class="text-center bg-[#0650E6] px-10 py-4 rounded-[5px] max-w-[420px] mx-auto opacity-[80%]">
                        <p class="text-white font-lato font-medium">{{ error }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
   

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

document.body.classList.toggle('no-scroll')

const email = ref('')
const name = ref('')
const input = ref(null)
const error = ref('')
function sendEmail() {
    emailjs.sendForm('service_lxmkjcn', 'template_smycxmb', input.value, 'lmMuXex_BZd7r06sn')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            error.value = 'Письмо отправлено успешно. Cкоро я свяжусь с вами.'
        }, (error) => {
            console.log('FAILED...', error.text);
            error.value = 'Ошибка отправки'
        });

    email.value = ''
    name.value = ''
    error.value = ''
}


</script>
  
<style scoped>
.modal {
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.model-content {
    margin: 0 auto;
    padding: 40px;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

input[type=text],
input[type=password],
input[type=email] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
}

.container {
    margin-top: 15%;
    padding: 40px;
}</style>