<template>
    <div
        class="bg-gradient-to-tr from-emerald-600 via-emerald-500 to-sky-500 h-56 w-full flex items-center dark:bg-gradient-to-tr dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
      <div class="container mx-auto">
        <div
            class="2xl:border-l-4 xl:border-l-4 lg:border-l-4 md:border-l-4 border-white dark:border-emerald-600 2xl:text-start xl:text-start md:text-start text-center">
          <h1 class="font-bold text-4xl text-white mb-2 indent-2 dark:text-emerald-500">{{ $t('main.message') }}</h1>
        </div>

        <a onclick="window.history.back()"
           class="text-white dark:text-gray-500 2xl:hidden xl:hidden lg:hidden md:hidden inline-flex items-center font-medium hover:text-gray-900 dark:hover:text-white cursor-pointer justify-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-4 h-4 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"/>
          </svg>
          <span>{{ $t('others.go-back') }}</span>
        </a>

        <nav aria-label="Breadcrumb" class="2xl:block xl:block lg:block md:block hidden">
          <ol class="flex space-x-1 md:space-x-3 text-white dark:text-gray-500">
            <li class="flex items-center hover:text-gray-900 dark:hover:text-white cursor-pointer hover:color-gray-900">
              <a @click="this.$router.push('/')" class="inline-flex items-center font-medium">
                <svg class="w-4 h-4 mr-2" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                <span class="hidden sm:block">{{ $t('main.home-page') }}</span>
              </a>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="ml-1 font-medium md:ml-2 select-none">{{ $t('main.message') }}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="container mx-auto flex justify-between items-center py-5">
      <div class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full 2xl:mx-0 xl:mx-0 lg:mx-0 mx-2">
        <div class="flex flex-col">
          <label class="dark:text-gray-400 font-medium">{{ $t('others.search') }}</label>
          <div class="relative flex space-x-2">
            <input type="text" v-model="searchRequest.title"
                   class="block w-full text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:focus:ring-emerald-400 dark:border-gray-300"
                   required="required">
            <div v-if="this.isSearch" @click="clearSearch()"
                 class="mr-2 h-9 w-14 hover:text-gray-500 flex justify-center items-center bg-white border dark:hover:text-gray-300 hover:border-emerald-500 transition-all ease-linear cursor-pointer rounded-md dark:bg-gray-900 dark:text-gray-500 dark:hover:border-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>
            </div>
            <div @click="searchQuery()"
                 class="mr-2 h-9 w-14 hover:text-gray-500 flex justify-center items-center bg-white border dark:hover:text-gray-300 hover:border-emerald-500 transition-all ease-linear cursor-pointer rounded-md dark:bg-gray-900 dark:text-gray-400 dark:hover:border-emerald-500">
              <svg aria-hidden="true" class="w-5 h-5" fill="none"
                   stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div v-if="!isSearch" class="flex flex-col text-gray-700 space-x-2 2xl:items-end xl:items-end lg:items-end md:items-end items-center">
          <label class="ml-2 dark:text-gray-400">{{ $t('others.pagination') }}</label>
          <div class="flex">
            <div :title="$t('others.goto-start')" @click="goToPage(1)"
                 class="mr-2 h-9 w-9 flex justify-center items-center bg-white border hover:text-gray-500 dark:hover:text-gray-300 hover:border-emerald-500 transition-all ease-linear cursor-pointer rounded-md dark:bg-gray-900 dark:text-gray-500 dark:hover:border-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"/>
              </svg>
            </div>
            <div class="flex space-x-2">
              <div v-for="page in visiblePages" :key="page" @click="goToPage(page)"
                   :class="{ active: currentPage === page }"
                   class="h-9 w-9 flex justify-center items-center bg-white border hover:border-emerald-500 dark:hover:text-gray-300 transition-all ease-linear cursor-pointer rounded-md dark:bg-gray-900 dark:text-gray-500 dark:hover:border-emerald-500">
                {{ page }}
              </div>
            </div>
            <div :title="$t('others.goto-end')" @click="goToPage(this.endIndex)"
                 class="ml-2 h-9 w-9 flex justify-center items-center bg-white border hover:text-gray-500 dark:hover:text-gray-300 hover:border-emerald-500 transition-all ease-linear cursor-pointer rounded-md dark:bg-gray-900 dark:text-gray-500 dark:hover:border-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
              </svg>
            </div>
            <div class="relative">
              <div @click="toogleSettings()"
                   :class="{'bg-emerald-500 text-white' : showSettings === true}"
                   class="ml-2 h-9 w-9 flex justify-center items-center border hover:text-gray-500 dark:hover:text-gray-300 hover:border-emerald-500 transition-all ease-linear cursor-pointer rounded-md dark:bg-gray-900 dark:text-gray-500 dark:hover:border-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
                </svg>
              </div>
              <div v-if="showSettings"
                   class="z-50 right-0 mt-1 absolute p-2 bg-white border border-gray-300 rounded shadow-md dark:bg-gray-900 dark:text-gray-500">
                <label>{{ $t('others.count') }}</label>
                <div class="flex space-x-2">
                  <div @click="changeView(8)" :class="{ 'text-gray-500 border-emerald-500 dark:border-emerald-500': this.itemsPerPage === '8' }"
                       class="h-9 w-9 flex justify-center items-center border hover:text-gray-500 dark:hover:text-gray-300 hover:border-emerald-500 transition-all ease-linear cursor-pointer rounded-md dark:bg-gray-900 dark:text-gray-500 dark:hover:border-emerald-500">
                    8
                  </div>
                  <div @click="changeView(16)" :class="{ 'text-gray-500 border-emerald-500 dark:border-emerald-500': this.itemsPerPage === '16' }"
                       class="h-9 w-9 flex justify-center items-center border hover:text-gray-500 dark:hover:text-gray-300 hover:border-emerald-500 transition-all ease-linear cursor-pointer rounded-md dark:bg-gray-900 dark:text-gray-500 dark:hover:border-emerald-500">
                    16
                  </div>
                  <div @click="changeView(32)" :class="{ 'text-gray-500 border-emerald-500 dark:border-emerald-500': this.itemsPerPage === '32' }"
                       class="h-9 w-9 flex justify-center items-center border hover:text-gray-500 dark:hover:text-gray-300 hover:border-emerald-500 transition-all ease-linear cursor-pointer rounded-md dark:bg-gray-900 dark:text-gray-500 dark:hover:border-emerald-500">
                    32
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-10 2xl:mx-0 xl:mx-0 lg:mx-0 mx-2">
      <div
          class="container mx-auto grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          <MessageBlock @click="storeMessage()" v-for="item in this.deposDate" :key="item.id" :title="
            item.depos.filter((e) => e.language === this.$i18n.locale)[0].title
          " :date="item.posted" :imageBase64="
            item.depos.filter((e) => e.language === this.$i18n.locale)[0]
              .coverBase64
          " /> 
      </div>
    </div>
</template>

<script>
import MessageBlock from '@/components/MessageBlock.vue';
export default {
  components: {
    MessageBlock
  },
  data() {
    return {
      enteredPage: null,
      currentPage: 1,
      itemsPerPage: 8,
      endIndex: null,
      deposDate: [],
      startDate: null,
      endDate: null,
      showSettings: false,
      loading: true,
      isSearch: false,
      searchRequest: {
        title: null,
        language: localStorage.getItem("locale")
      }
    };
  },
  computed: {
    visiblePages() {
      const totalPages = this.endIndex;
      const visibleRange = 2;
      let startPage = Math.max(this.currentPage - visibleRange, 1);
      let endPage = Math.min(this.currentPage + visibleRange, totalPages);
      if (endPage - startPage < visibleRange * 2) {
        if (startPage === 1) {
          endPage = Math.min(startPage + visibleRange * 2, totalPages);
        } else {
          startPage = Math.max(endPage - visibleRange * 2, 1);
        }
      }
      return Array.from({length: endPage - startPage + 1}, (_, index) => index + startPage);
    },
  },
  methods: {
    storeMessage(item) {
      sessionStorage.setItem("MESSAGE_ID", item);
      this.$router.push("/messageDetail");
    },
    clearSearch() {
      this.loading = true;
      this.isSearch = false;
      this.searchRequest = {
        title: null,
        language: localStorage.getItem("locale")
      };
      this.axios.get(`/api/Depo/GetLastPageNumberDepoMessages/{pageSize}/${this.itemsPerPage}`)
          .then(response => {
            this.endIndex = response.data;
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.axios.get(`/api/Depo/GetDepoMessagesByPageNumber/1/${this.itemsPerPage}`)
                .then(response => {
                  this.deposDate = response.data;
                })
                .catch(error => {
                  console.log(error);
                });
            this.loading = false;
          })
    },
    searchQuery() {
      this.loading = true;
      this.axios.post(`/api/Depo/GetMessagesBySearchParameters`, this.searchRequest)
          .then(response => {
            this.deposDate = response.data;
            this.isSearch = true;
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.loading = false;
          })
    },
    toogleSettings() {
      this.showSettings = !this.showSettings;
    },
    changeView(value) {
      localStorage.setItem("itemsPerPage", value);
      const count = localStorage.getItem("itemsPerPage");
      this.itemsPerPage = count;
      this.loading = true;
      this.axios.get(`/api/Depo/GetLastPageNumberDepoMessages/${this.itemsPerPage}`)
          .then(response => {
            this.endIndex = response.data;
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.axios.get(`/api/Depo/GetMessagesNewsByPageNumber/1/${this.itemsPerPage}`)
                .then(response => {
                  this.deposDate = response.data;
                })
                .catch(error => {
                  console.log(error);
                });
            this.loading = false;
          })
    },
    formatedDate(item) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'};
      const date = new Date(item).toLocaleDateString('ru-RU', options);
      return date;
    },
    goToPage(pageNumber) {
      this.loading = true;
      this.axios.get(`/api/Depo/GetDepoMessagesByPageNumber/${pageNumber}/${this.itemsPerPage}`)
          .then(response => {
            this.deposDate = response.data;
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.loading = false;
          })
      this.currentPage = pageNumber;
    },
  },
  mounted() {
    if (localStorage.getItem("itemsPerPage")) {
      this.itemsPerPage = localStorage.getItem("itemsPerPage");
    }
    this.axios.get(`/api/Depo/GetLastPageNumberDepoMessages/${this.itemsPerPage}`)
        .then(response => {
          this.endIndex = response.data;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.axios.get(`/api/Depo/GetDepoMessagesByPageNumber/1/${this.itemsPerPage}`)
              .then(response => {
                this.deposDate = response.data;
              })
              .catch(error => {
                console.log(error);
              });
          this.loading = false;
        })
  },
};
</script>

<style scoped="scoped">
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.ellipsistitle {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.active {
  background-color: #0daf4b;
  color: white;
}

@media (min-width: 768px) {
  .ellipsis {
    -webkit-line-clamp: 2;
  }

  .ellipsistitle {
    -webkit-line-clamp: 3;
  }
}

@media (min-width: 507px) {
  .ellipsis {
    -webkit-line-clamp: 2;
  }

  .ellipsistitle {
    -webkit-line-clamp: 3;
  }
}

@media (min-width: 1px) {
  .ellipsis {
    -webkit-line-clamp: 2;
  }

  .ellipsistitle {
    -webkit-line-clamp: 3;
  }
}</style>