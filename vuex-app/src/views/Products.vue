<template>
  <div class="products-block">
    <aside class="sub-header">
      <h5>Products list</h5>
      <div class="info-block">
        <p>Fake data provided by <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSON Placholder</a></p>
      </div>
    </aside>

    <div class="cards-block" v-if="receivedData.length">
      <Card v-for="(card, index) in receivedData"
            :key="index"
            :card="card"
      />
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>

<script lang="ts">
import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex';
import {key} from '../store/index'
import {defineAsyncComponent, defineComponent} from 'vue'
import Card from "../components/Card.vue";

export default defineComponent({
  name: 'products',
  setup() {
    const store = useStore(key);
    store.dispatch('fetchProducts');
    let receivedData = computed(() => store.getters.getReceivedProducts)
    return {
      receivedData,
    }
  },
  components: {
    Card,
    Loader: defineAsyncComponent(() => import('../components/Loader.vue'))
  }
})
</script>

<style>
.products-block {
  min-height: 100%;
}

.sub-header {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: 0px 0px 50px 50px / 0px 4px 50px 50px;
}

.sub-header h5 {
  font-size: 1.2em;
  text-align: center;
}

.info-block {
  text-align: center;
}

.info-block p {
  margin: 2px 0;
}

.info-block p a {
  color: tomato;
}

.cards-block {
  display: flex;
  flex-flow: row wrap;
  padding: 0 20px;
  justify-content: center;
}
</style>
