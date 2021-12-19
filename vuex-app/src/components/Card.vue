<template>
  <div class="card-wrapper">
    <div class="card-img">
      <img :src="card.url" alt="">
    </div>
    <div class="title">{{ title }}</div>
    <div class="price">
      <div class="price__value">0.00</div>
      <div class="price__currency" ref="priceCurrency"></div>
    </div>
    <router-link :to="{ name: 'product', params: { id: card.id }}" class="link">Details</router-link>
    <router-view :key="routePath"/>
  </div>
</template>

<script>
import {computed, onBeforeMount} from 'vue'
import cropTitle from '../filters/cropTitle';
import {useRoute} from "vue-router";

export default {
  props: {
    card: Object
  },
  setup(props) {
    let priceCurrency = '₽'
    let route = useRoute();
    let routePath = route.path;
    let title = computed(() => cropTitle(props.card.title, 5));

    onBeforeMount(() => priceCurrency = '$');

    return {
      priceCurrency,
      routePath,
      title
    }
  }
}
</script>

<style>

.card-wrapper {
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 330px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px #111;
  margin: 7px;
  cursor: pointer;
  transition: 0.2s all ease;
}

.card-wrapper:hover {
  box-shadow: 0px 0px 5px 2px #111;
}

.card-img {
  display: flex;
  margin: 25px auto;
  width: 250px;
  height: 200px;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.title {
  text-align: center;
  font-size: 1.1em;
  font-weight: bold;
}

.price {
  display: inline-flex;
  justify-content: center;
}

.price__value,
.price__currency {
  display: flex;
}

.link {
  display: flex;
  margin: 5px auto;
  font-size: 1.1em;
  background-color: tomato;
  padding: 0 10px;
  color: #fff;
}

.link:hover {
  box-shadow: 0px 0px 100px 100px rgba(17, 17, 17, 0.363) inset;
}

.link:visited {
  color: #fff;
}
</style>
