<template>
<div class="container mx-auto space-y-10 py-5">
    <section id="depoNews" class="border border-blue-500 rounded-lg p-3 mx-1 dark:bg-gray-900 bg-blue-50">
        <h1 class="mx-5 uppercase text-3xl font-extrabold text-blue-500">
            {{ $t("main.news")
        }}<small class="lowercase ml-4 font-light text-base text-gray-500 dark:text-gray-400">{{
          $t("main.news-desc")
        }}</small>
        </h1>
        <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2">
            <NewsBlock v-for="item in this.newsData" :key="item.id" :title="
            item.news.filter((e) => e.language === this.$i18n.locale)[0].title
          " :date="item.posted" :imageBase64="
            item.news.filter((e) => e.language === this.$i18n.locale)[0]
              .coverBase64
          " />
        </div>
        <button class="mx-auto flex items-center justify-center space-x-2 text-blue-500 hover:animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
            </svg>
            <p>{{ $t("others.view-all-news")
        }}</p>
        </button>
    </section>

    <section id="depoCompass" class="border border-orange-500 rounded-lg p-3 mx-1 dark:bg-gray-900 bg-orange-50/40">
        <h1 class="mx-5 uppercase text-2xl font-extrabold text-orange-500">
            {{ $t("main.compass")
        }}<small class="lowercase ml-4 font-light text-base text-gray-500 dark:text-gray-400">{{
          $t("main.compass-desc")
        }}</small>
        </h1>
        <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2">
            <CompassBlock v-for="item in this.compassData" :key="item.id" :title="
            item.depos.filter((e) => e.language === this.$i18n.locale)[0].title
          " :date="item.posted" :imageBase64="
            item.depos.filter((e) => e.language === this.$i18n.locale)[0]
              .coverBase64
          " />
        </div>
        <button class="mx-auto flex items-center justify-center space-x-2 text-orange-500 hover:animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
            </svg>
            <p>{{ $t("others.view-all-compass")
        }}</p>
        </button>
    </section>

    <section id="depoMessages" class="border border-emerald-500 rounded-lg p-3 mx-1 dark:bg-gray-900 bg-emerald-50/40">
        <h1 class="mx-5 uppercase text-2xl font-extrabold text-emerald-500">
            {{ $t("main.message")
        }}<small class="lowercase ml-4 font-light text-base text-gray-500 dark:text-gray-400">{{
          $t("main.message-desc")
        }}</small>
        </h1>
        <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2">
            <MessageBlock v-for="item in this.messageData" :key="item.id" :title="
            item.depos.filter((e) => e.language === this.$i18n.locale)[0].title
          " :date="item.posted" :imageBase64="
            item.depos.filter((e) => e.language === this.$i18n.locale)[0]
              .coverBase64
          " />
        </div>
        <button class="mx-auto flex items-center justify-center space-x-2 text-emerald-500 hover:animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
            </svg>
            <p>{{ $t("others.view-all-message")
        }}</p>
        </button>
    </section>
</div>
</template>

<script>
import NewsBlock from "@/components/NewsBlock.vue";
import CompassBlock from "@/components/CompassBlock.vue"
import MessageBlock from "@/components/MessageBlock.vue"

export default {
    components: {
        NewsBlock,
        CompassBlock,
        MessageBlock
    },
    data() {
        return {
            newsData: [],
            compassData: [],
            messageData: [],
        };
    },
    methods: {
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
                    this.loading = false;
                });
        },
    },
    mounted() {
        this.loadData();
    },
};
</script>
