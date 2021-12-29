<template>
  <div class="products-page__wrapper">
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <template #default>
            <component :is="Component"></component>
          </template>
          <template #fallback>
            <Loader />
          </template>
        </Suspense>
      </template>
    </router-view>
  </div>
</template>

<script lang="ts">
import {defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  name: "products-page",
  components: {
    Loader: defineAsyncComponent(() => import('../components/Loader.vue'))
  }
})
</script>

<style scoped>
  .products-page__wrapper {
    min-height: 100%;
  }
</style>
