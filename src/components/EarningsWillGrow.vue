<template>
    <div class="max-w-[1200px] mx-auto mt-[110px] lg:mx-5">
        <div class="mb-[34px]">
            <h2 class="text-[45px] sm:text-[40px] font-oswald font-bold leading-[130%] text-white" v-motion-pop-visible>
                <span class="text-[#F39F30]">Заработок будет расти</span><br>вместе с опытом
            </h2>
            <p
                class="max-w-[468px] md:max-w-[700px] md:mb-5 sm:text-[18px] text-[20px] font-lato font-medium leading-[130%] text-white mt-[34px] ml-[200px] lg:ml-0" v-motion-pop-visible>
                По данным Хабр Карьеры средняя зарплата Python-разработчика — 210.000 ₽</p>
        </div>
        <div class="grid grid-cols-3 lg3:grid-cols-1 gap-6 ml-[200px] lg:ml-0">
            <div class="bg-white  min-w-[310px] h-[150px] pt-5 px-10 text-center rounded-[20px] lg3:mt-0 mt-[100px]" v-motion-pop-visible>
                <h4 class="text-[35px]  sm:text-[25px] font-oswald font-bold leading-[130%] text-black mb-5">86.000 ₽</h4>
                <div class="flex gap-4 max-w-[220px] mx-auto items-center">
                    <div class="bg-[#F39F30] rounded-[10px] px-3 py-2">
                        <p class="text-[18px] font-lato font-medium leading-[130%] text-white">Junior</p>
                    </div>
                    <p class="text-[20px] font-lato font-medium leading-[130%] text-black">После курса</p>
                </div>
            </div>
            <div class="bg-white  min-w-[310px] h-[200px] pt-[45px] px-10 text-center rounded-[20px] lg3:mt-0 mt-[50px]" v-motion-pop-visible>
                <h4 class="text-[35px] sm:text-[25px] font-oswald font-bold leading-[130%] text-black mb-5">175.000 ₽</h4>
                <div class="flex gap-4 max-w-[170px] mx-auto items-center pt-7">
                    <div class="bg-[#F39F30] rounded-[10px] px-3 py-2">
                        <p class="text-[18px] font-lato font-medium leading-[130%] text-white">Middle</p>
                    </div>
                    <p class="text-[20px] font-lato font-medium leading-[130%] text-black">1–5 лет</p>
                </div>
            </div>
            <div class="bg-white  min-w-[310px] h-[250px] pt-[70px] px-10 text-center rounded-[20px]" v-motion-pop-visible>
                <h4 class="text-[35px] sm:text-[25px] font-oswald font-bold leading-[130%] text-black mb-5">250.000 ₽</h4>
                <div class="flex gap-4 max-w-[160px] mx-auto items-center pt-[50px]">
                    <div class="bg-[#F39F30] rounded-[10px] px-3 py-2">
                        <p class="text-[18px] font-lato font-medium leading-[130%] text-white">Senior</p>
                    </div>
                    <p class="text-[20px] font-lato font-medium leading-[130%] text-black">5+ лет</p>
                </div>
            </div>
        </div>
    </div>
</template>
