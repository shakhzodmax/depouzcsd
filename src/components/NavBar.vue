<template>
  <section
    id="navbar"
    class="fixed top-0 w-full z-[51] h-[56px] bg-white dark:bg-gray-900 shadow-lg"
  >
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <button
          class="flex-none flex justify-start items-center"
          @click="this.$router.push('/')"
        >
          <img class="w-14 h-14 scale-75" src="~@/assets/img/main.png" alt="" />
          <p
            class="text-xs pl-1 uppercase text-start dark:text-gray-400 2xl:block xl:block hidden"
          >
            {{ $t("navbar.logo-part-1") }}<br />
            {{ $t("navbar.logo-part-2") }}
          </p>
        </button>
        <ul class="flex space-x-14 items-center justify-between normal-case">
          <li
            class="transition-all ease-in cursor-pointer hover:bg-blue-50 rounded-md bg-transparent border-0 dark:text-gray-400 text-gray-800 text-sm hover:text-blue-500 bg-sky-500 p-2"
          >
            {{ $t("main.news") }}
          </li>
          <li
            class="transition-all ease-in cursor-pointer hover:bg-blue-50 rounded-md bg-transparent border-0 dark:text-gray-400 text-gray-800 text-sm hover:text-blue-500 bg-sky-500 p-2"
          >
            {{ $t("main.compass") }}
          </li>
          <li
            class="transition-all ease-in cursor-pointer hover:bg-blue-50 rounded-md bg-transparent border-0 dark:text-gray-400 text-gray-800 text-sm hover:text-blue-500 bg-sky-500 p-2"
          >
            {{ $t("main.message") }}
          </li>
        </ul>
        <div
          class="locale-changer flex justify-between items-center w-[73px] font-medium text-gray-700 border-gray-100 md:w-auto hover:bg-blue-200 md:hover:bg-transparent md:border-0 md:p-0"
        >
          <select
            class="transition-all ease-in cursor-pointer hover:bg-blue-50 rounded-md bg-transparent border-0 text-gray-800 text-sm hover:text-blue-500 bg-sky-500 dark:text-gray-400"
            @change="updateLanguage()"
            v-model="$i18n.locale"
          >
            <option
              class="text-black hover:text-blue-500"
              v-for="(locale, i) in locales"
              :key="`locale-${i}`"
              :value="locale"
            >
              {{ locale.toUpperCase() }}
            </option>
          </select>
          <div
            class="flex justify-between items-center w-[73px] font-medium text-gray-700 border-gray-100 md:w-auto hover:bg-blue-200 md:hover:bg-transparent md:border-0 md:p-0"
          >
            <button
              @click="toggleSunMoon"
              class="transition-all ease-in cursor-pointer hover:bg-blue-50 rounded-md bg-transparent border-0 dark:text-gray-400 text-gray-800 text-sm hover:text-blue-500 bg-sky-500 p-2"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  v-if="isSun"
                  d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                />
                <path
                  v-else
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      locales: ["ru", "en", "uz"],
      themes: 'dark',
      isSun: true,
    };
  },
  computed: {
    currentIcon() {
      return this.isSun ? "sun-icon" : "moon-icon";
    },
  },
  methods: {
    toggleSunMoon() {
      this.isSun = !this.isSun;
      this.changeTheme('dark');
    },
    updateLanguage() {
      localStorage.setItem("locale", this.$i18n.locale);
    },
    changeTheme(theme) {
      let element = document.body;
      if (element.classList.contains(theme)) {
        element.classList.remove(theme);
      } else {
        element.classList.add(theme);
      }
      localStorage.setItem("theme", theme);
    },
  },
  mounted() {
    if (localStorage.getItem("locale")) {
      this.$i18n.locale = localStorage.getItem("locale");
    } else {
      localStorage.setItem("locale", this.$i18n.locale);
    }
    if (localStorage.theme == "dark") {
      let element = document.body;
      element.classList.contains("dark")
        ? element.classList.remove("dark")
        : element.classList.add("dark");
    }
  },
};
</script>
