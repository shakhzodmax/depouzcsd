<template>
      <div
          class="flex flex-col justify-center items-center relative rounded-lg hover:scale-[95%] shadow-md transition-all ease-linear cursor-pointer hover:bg-blue-500 select-none">
        <h2 class="absolute text-white z-50 text-center 2xl:text-xl xl:text-xs lg:text-xs text-sm px-4 mb-4 break-after-all uppercase">
          {{ title }}</h2>
        <img :src="image" alt="title"
             class="rounded-t-lg h-64 object-cover w-full">
        <div class="absolute inset-0 bg-black opacity-70 mb-1 rounded-lg"></div>
        <div class="flex justify-between w-full text-gray-500 p-2 rounded-b-lg text-sm bg-white z-50">
          <div class="flex">
            {{ this.formatedDate }}
          </div>
          <div class="flex justify-center items-center text-blue-500">
            <div>{{ $t('others.more') }}</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-3 h-3">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
            </svg>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imageBase64: {
      type: String,
      required: true
    }
  },
  computed: {
    formatedDate() {
      const date = new Date(this.date).toLocaleDateString('ru-RU');
      return date;
    },
    image() {
      return `${this.imageBase64}`;
    }
  }
};
</script>