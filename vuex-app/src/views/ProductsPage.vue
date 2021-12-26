<template>
  <div class="products-page__wrapper">
    <router-view/>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: "products-page"
})
</script>

<style scoped>
  .products-page__wrapper {
    height: 100%;
  }
</style>
