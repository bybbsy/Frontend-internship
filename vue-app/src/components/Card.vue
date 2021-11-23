<template>
  <div class="card-wrapper">
      <div class="card-img">
          <img :src="card.url" alt="">
      </div>
      <div class="title">{{ card.title }}</div>
      <router-link :to="{ name: 'product', params: { id: card.id }}" class="link">Details</router-link>
      <router-view :key="$route.path"/>
  </div>
</template>

<script>
export default {
    props: {
        card: Object
    }
}
</script>

<style>

.card-wrapper {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 330px;
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