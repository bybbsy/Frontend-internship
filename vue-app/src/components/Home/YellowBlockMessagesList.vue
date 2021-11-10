<template>
  <ul class="messages-list">
      <YellowBlockMessage />
  </ul>
</template>

<script>
import YellowBlockMessage from './YellowBlockMessage.vue'

export default {
    name: 'yellow-block-messages-list',
    components: {
        YellowBlockMessage
    }
}
</script>

<style>
.messages-list {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0;
      padding: 0;
  }
   @media screen and (max-width: 1280px) {
      .messages-list {
          height: 100%;
      }
   }
</style>