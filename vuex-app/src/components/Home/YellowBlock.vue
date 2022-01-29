<template>
    <div class="yellow-block">
        <YellowBlockMessagesList />
    </div>
</template>

<script lang="ts">
import YellowBlockMessagesList from './YellowBlockMessagesList.vue'
import { defineComponent } from "vue";

export default defineComponent({
    name: 'yellow-block',
    components: {
        YellowBlockMessagesList
    }
})
</script>

<style>
.yellow-block {
  display: flex;
  flex: 1 0;
  background: var(--block-color);
  border-radius: 5px;
  margin: 5px;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  z-index: 1;
}

@media screen and (max-width: 1280px) {
  .yellow-block {
    top: 0;
    left: 0;
    position: sticky;
    flex: 0 0 200px;
    height: 200px;
    order: 1;
    flex-flow: row nowrap;
    overflow-y: scroll;
    overflow-x: hidden;
    align-items: center;
  }
}
</style>
