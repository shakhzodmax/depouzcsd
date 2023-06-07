<template>
    <div class="h-screen flex flex-col">
      <div class="">
        <NavBar />
      </div>
      <div class="basis-full mt-[56px]">
        <div class="mx-auto">
          <router-view />
        </div>
      </div>
      <div class="basis-footer">
        <FooterBar />
      </div>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  components: {
    NavBar,
    FooterBar
  },
}
</script>

<style>
  * {
    font-family: "Gotham Pro", Gotham, Arial;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3F83F8;
    border-radius: 50px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  .dark::-webkit-scrollbar-thumb {
    background-color: #84cc16;
    border-radius: 50px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }

  @font-face {
    font-family: "Gotham Pro";
    src: local("Gotham-Regular"),
      url(./fonts/GothamPro.ttf) format("truetype")
  }

  @font-face {
    font-family: "Gotham Pro Light";
    src: local("Gotham-Light"),
      url(./fonts/GothamPro-Light.ttf) format("truetype")
  }

  @font-face {
    font-family: "Gotham Pro Medium";
    src: local("Gotham-Medium"),
      url(./fonts/GothamPro-Medium.ttf) format("truetype")
  }

  @font-face {
    font-family: "Gotham Pro Bold";
    src: local("Gotham-Bold"),
      url(./fonts/GothamPro-Bold.ttf) format("truetype")
  }

  @font-face {
    font-family: "Gotham Pro Bold Italic";
    src: local("Gotham-Bold-Italic"),
      url(./fonts/GothamPro-BoldItalic.ttf) format("truetype")
  }

  @font-face {
    font-family: "Gotham Pro Black";
    src: local("Gotham-Black"),
      url(./fonts/GothamPro-Black.ttf) format("truetype")
  }
    .dark {
      background-color: #464646;
  }
</style>