<template>
<div v-if="isLoading">
    <LoadingState />
</div>
<div else>
    <div class="container mx-auto space-y-10 py-5 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-2">
    <section id="depoNews" class="border border-blue-500 rounded-lg p-3 mx-1 dark:bg-gray-900 bg-blue-50">
        <h1 class="mx-5 uppercase text-2xl font-extrabold text-blue-500">
            {{ $t("main.news") 
        }}<small class="lowercase ml-4 font-light text-base text-gray-500 dark:text-gray-400">{{
          $t("main.news-desc")
        }}</small>
        </h1>
        <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-4 p-4">
            <NewsBlock @click="storeNews(item.id)" v-for="item in this.newsData" :key="item.id" :title="
            item.news.filter((e) => e.language === this.$i18n.locale)[0].title
          " :date="item.posted" :imageBase64="
            item.news.filter((e) => e.language === this.$i18n.locale)[0]
              .coverBase64
          " />
        </div>
        <button @click="this.$router.push('/depoNews')" class="mx-auto flex items-center justify-center space-x-2 text-blue-500 hover:animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
            </svg>
            {{ $t("others.view-all")
        }}
        </button>
    </section>

    <section id="depoCompass" class="border border-indigo-500 rounded-lg p-3 mx-1 dark:bg-gray-900 bg-indigo-50/40">
        <h1 class="mx-5 uppercase text-2xl font-extrabold text-indigo-500">
            {{ $t("main.compass")
        }}<small class="lowercase ml-4 font-light text-base text-gray-500 dark:text-gray-400">{{
          $t("main.compass-desc")
        }}</small>
        </h1>
        <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-4 p-4">
            <CompassBlock @click="storeCompass(item.id)" v-for="item in this.compassData" :key="item.id" :title="
            item.depos.filter((e) => e.language === this.$i18n.locale)[0].title
          " :date="item.posted" :imageBase64="
            item.depos.filter((e) => e.language === this.$i18n.locale)[0]
              .coverBase64
          " />
        </div>
        <button @click="this.$router.push('/compasses')" class="mx-auto flex items-center justify-center space-x-2 text-indigo-500 hover:animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
            </svg>
            {{ $t("others.view-all")
        }}
        </button>
    </section>

    <section id="depoMessages" class="border border-emerald-500 rounded-lg p-3 mx-1 dark:bg-gray-900 bg-emerald-50/40">
        <h1 class="mx-5 uppercase text-2xl font-extrabold text-emerald-500">
            {{ $t("main.message")
        }}<small class="lowercase ml-4 font-light text-base text-gray-500 dark:text-gray-400">{{
          $t("main.message-desc")
        }}</small>
        </h1>
        <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-4 p-4">
            <MessageBlock @click="storeMessage(item.id)" v-for="item in this.messageData" :key="item.id" :title="
            item.depos.filter((e) => e.language === this.$i18n.locale)[0].title
          " :date="item.posted" :imageBase64="
            item.depos.filter((e) => e.language === this.$i18n.locale)[0]
              .coverBase64
          " />
        </div>
        <button @click="this.$router.push('/messages')" class="mx-auto flex items-center justify-center space-x-2 text-emerald-500 hover:animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
            </svg>
            {{ $t("others.view-all")
        }}
        </button>
    </section>
</div>
</div>
</template>

<script>
import NewsBlock from "@/components/NewsBlock.vue";
import CompassBlock from "@/components/CompassBlock.vue"
import MessageBlock from "@/components/MessageBlock.vue"
import LoadingState from "@/components/LoadingState.vue";

export default {
    components: {
        NewsBlock,
        CompassBlock,
        MessageBlock,
        LoadingState
    },
    data() {
        return {
            newsData: [],
            compassData: [],
            messageData: [],
            isLoading: true
        };
    },
    methods: {
        storeNews(item) {
            sessionStorage.setItem("NEWS_ID", item);
            this.$router.push("/newsDetail");
        },
        storeCompass(item) {
            sessionStorage.setItem("COMPASS_ID", item);
            this.$router.push("/compassDetail");
        },
        storeMessage(item) {
            sessionStorage.setItem("MESSAGE_ID", item);
            this.$router.push("/messageDetail");
        },
        loadData() {
            const endpoints = [
                this.axios.get("/api/Depo/GetLastFourDepoNews"),
                this.axios.get("/api/Depo/GetLastFourCompasses"),
                this.axios.get("/api/Depo/GetLastFourMessages"),
            ];

            this.axios
                .all(endpoints)
                .then(
                    this.axios.spread((news, compass, message) => {
                        this.newsData = news.data;
                        this.compassData = compass.data;
                        this.messageData = message.data;
                    })
                )
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
    },
    mounted() {
        this.loadData();
    },
};
</script>
