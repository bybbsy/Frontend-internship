<template>
  <div class="products-block">
      <aside class="sub-header">
        <h5>Products list</h5>
        <div class="info-block">
          <p>Fake data provided by <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSON Placholder</a> </p> 
        </div>
      </aside>

      <div class="cards-block" v-if="receivedData">
          <Card v-for="(card, index) in receivedData"
          :key="index"
          :card="card"
        />
      </div>
      <div v-else>
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {

  name: 'Products',
  data: function() {
    return {
      receivedData: null
    }
  },
  async beforeCreate() {
    return fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
          .then(response => response.json())
          .then(json => this.receivedData = json)
  },
  components: {
    Card
  }
}
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