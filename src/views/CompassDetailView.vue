<template>
<div v-if="loading">
    <LoadingState />
</div>
<div v-else>
    <div class="bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 h-56 w-full flex items-center dark:bg-gradient-to-tr dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
        <div class="container mx-auto">
            <div class="2xl:border-l-4 xl:border-l-4 lg:border-l-4 md:border-l-4 border-white dark:border-indigo-600 2xl:text-start xl:text-start md:text-start text-center">
                <h1 class="font-bold text-4xl text-white mb-2 indent-2 dark:text-indigo-500 uppercase">{{ $t('main.compass') }}</h1>
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
                            <svg class="w-6 h-6 text-gray-300" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="ml-1 font-medium md:ml-2 select-none uppercase">{{ $t('main.compass') }}</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
    <section>
        <div class="container mx-auto py-5">
            <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-5 mx-2 dark:border border-indigo-500 rounded-lg dark:bg-gray-900 border shadow" v-for="(item) in filteredItems" :key="item.id">
                <img :src="item.coverBase64" alt="" class="mx-auto h-96 w-fit basis-2/5 shadow-lg rounded-lg object-fit" />
                <div class="basis-3/5 flex flex-col justify-center">
                    <div class="grid 2xl:grid-cols-2 grid-cols-1">
                        <p class="font-bold text-indigo-500 dark:text-indigo-500 2xl:text-start text-center 2xl:text-2xl xl:text-2xl lg:text-2xl text-xl mb-2 uppercase">{{ item.title }}</p>
                        <div class="flex items-center 2xl:justify-end justify-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-indigo-500">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                            </svg>
                            <p class="dark:text-gray-300 2xl:text-base xl:text-base lg:text-base text-sm">{{ formatedDate(this.posted) }}</p>
                        </div>
                    </div>
                    <div v-html="item.description" class="indent-10 text-justify dark:text-gray-300 2xl:text-base xl:text-base lg:text-base text-sm"></div>
                    <a target="_blank" :href="'/api/Website/GetPdfById'+  item.pdfId" type="button" class="my-5 text-white bg-gradient-to-br from-indigo-500 to-indigo-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-200 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{{ $t('others.watch') }}</a>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import LoadingState from "@/components/LoadingState.vue";
import axios from "axios";

export default {
    components: {
        LoadingState
    },
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
            const date = new Date(item).toLocaleDateString('ru-RU');
            return date;
        },
    },
    mounted() {
        let id = parseInt(sessionStorage.getItem('COMPASS_ID'));
        axios.get(`/api/Depo/GetDepoCompassById${id}`)
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
        console.log(process.env.VUE_APP_API_URL);
    }
}
</script>
