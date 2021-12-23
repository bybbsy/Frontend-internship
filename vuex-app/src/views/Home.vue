<template>
  <main class="container">
    <div class="main">
      <RedBlock/>
      <div class="green-and-pink">
        <GreenBlock/>
        <PinkBlock/>
      </div>
    </div>
    <YellowBlock/>
  </main>
</template>

<script lang="ts">
import RedBlock from '../components/Home/RedBlock.vue'
import GreenBlock from '../components/Home/GreenBlock.vue'
import PinkBlock from '../components/Home/PinkBlock.vue'
import YellowBlock from '../components/Home/YellowBlock.vue'
export default {
  name: 'Home',
  components: {
    RedBlock, GreenBlock, PinkBlock, YellowBlock
  }
}
</script>

<style>
.container {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  flex: 0 1 100%;
  background: var(--main-background);
}
main {
  display: flex;
  min-height: 100%;
}
.main {
  display: flex;
  flex: 2 1;
  flex-flow: row wrap;
  margin: 5px;
}
.green-and-pink {
  display: flex;
  flex: 0 1 auto;
  min-height: 200px;
  height: fit-content;
  height: -moz-fit-content;
}
@media screen and (max-width: 1280px) {
  .container {
    flex-flow: column nowrap;
  }
  .main {
    flex: 1 1 100%;
    order: 2;
  }
  .green-and-pink {
    flex-flow: row wrap;
  }
}
</style>