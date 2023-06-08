<template>
<div class="bg-gradient-to-tr from-blue-600 via-sky-600 to-indigo-500 h-56 w-full flex items-center dark:bg-gradient-to-tr dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
    <div class="container mx-auto">
        <div class="2xl:border-l-4 xl:border-l-4 lg:border-l-4 md:border-l-4 border-white dark:border-blue-600 2xl:text-start xl:text-start md:text-start text-center">
            <h1 class="font-bold text-4xl text-white mb-2 indent-2 dark:text-blue-500">{{ $t('main.news') }}</h1>
        </div>

        <a onclick="window.history.back()" class="text-white dark:text-gray-300 2xl:hidden xl:hidden lg:hidden md:hidden inline-flex items-center font-medium hover:text-gray-900 dark:hover:text-white cursor-pointer justify-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
            <span>{{ $t('others.go-back') }}</span>
        </a>

        <nav aria-label="Breadcrumb" class="2xl:block xl:block lg:block md:block hidden">
            <ol class="flex space-x-1 md:space-x-3 text-white dark:text-gray-300">
                <li class="flex items-center hover:text-gray-900 dark:hover:text-white cursor-pointer hover:color-gray-900">
                    <a @click="this.$router.push('/')" class="inline-flex items-center font-medium">
                        <svg class="w-4 h-4 mr-2" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        <span class="hidden sm:block">{{ $t('main.home-page') }}</span>
                    </a>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="ml-1 font-medium md:ml-2 select-none">{{ $t('main.news') }}</span>
                    </div>
                </li>
            </ol>
        </nav>
    </div>
</div>
<div class="container mx-auto space-y-5 my-5 py-5 rounded-lg dark:bg-gray-900 shadow-md border dark:border-lime-500 dark:text-gray-300" v-for="(item) in filteredItems" :key="item.id">
    <div class="text-center">
        <p class="text-2xl font-bold text-blue-500 dark:text-blue-500">{{ item.title }}</p>
    </div>
    <img :src="item.coverBase64" alt="" width="660" class="mx-auto">
    <div class="2xl:w-[1050px] xl:w-[1050px] lg:w-[750px] mx-auto text-justify indent-6 px-2">
        <div v-html="item.description"></div>
    </div>
    <div v-show="item.pdfId" class="flex justify-center items-center space-x-5">
        <p>{{ $t('table.file') }}:</p>
        <a target="_blank" :href="'/api/Website/GetPdfById'+  item.pdfId"><img src="../assets/img/pdf.png" alt="pdf" width="35" height="35"></a>
    </div>
    <hr class="w-64 mx-auto">
    <div class="flex justify-center text-center space-x-2 text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 dark:text-blue-400 text-blue-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>
        <p class="text-sm italic font-bold dark:text-gray-300">{{ formatedDate(this.posted) }}</p>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    components: {},
    data() {
        return {
            loading: true,
            id: null,
            deposData: [],
            posted: null
        }
    },
    computed: {
        filteredItems() {
            return this.deposData.filter(item => item.language === this.$i18n.locale)
        }
    },
    methods: {
        formatedDate(item) {
            const dateTime = new Date(item);
            return dateTime.toLocaleDateString();
        },
    },
    mounted() {
        let id = parseInt(sessionStorage.getItem('NEWS_ID'));
        axios.get(`/api/Depo/GetDepoMessageById${id}`)
            .then(response => {
                this.deposData = response.data.depos;
                this.posted = response.data.posted;
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.loading = false;
            });
    }
}
</script>
