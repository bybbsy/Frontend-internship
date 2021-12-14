<template>
    <div id="app">
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import MainLayout from './layouts/MainLayout.vue'
// import EmptyLayout from './layouts/EmptyLayout.vue'

export default {
    name: 'App',
    setup() {
        let route = useRoute();
        let layout = computed(() => (route.meta.layout ?? 'empty') + '-layout')

        return {
            layout
        }
    },
    components: {
        MainLayout,
        // EmptyLayout
    },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :root {
      --block-color: rgba(228, 240, 247, 0.781);
      --message-top-block-color: #fff;
      --main-background: rgba(231, 231, 231, 0.527);
  }

  ::-webkit-scrollbar {
      width: 5px;
      background: #fff;
  }

  ::-webkit-scrollbar-thumb {
      background: tomato;
  }

  ::-webkit-scrollbar-button {
      height: 5px;
      background: teal;
  }


  html,
  body {
      font-family: Urbanist, Roboto, sans-serif;
      margin: 0;
      overflow-x: hidden;
      scrollbar-color: tomato teal;
      scrollbar-width: thin;
  }
  input[type=text],
  input[type=email],
  input[type=password],
  input[type=tel] {
      font-family: Roboto, sans-serif;
  }


  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  a,
  a:visited {
      text-decoration: none;
  }

  h2 {
      margin: auto 0;
      width: 100%;
      text-align: center;
  }

  h5 {
      margin: 0;
  }

  .wrapper {
      position: relative;
      background: #ccc;
      height: 100vh;
      overflow-x: hidden;
  }

  .wrapper.no-scroll {
      overflow: hidden;
  }

  header, footer {
      background-color: rgb(25, 153, 175);
  }
</style>
