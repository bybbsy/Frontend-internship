<template>
    <div class="red-block">
        <RedBlockMessage/>
        <RedBlockReply/>
    </div>
</template>

<script lang="ts">
import RedBlockMessage from './RedBlockMessage.vue'
import RedBlockReply from './RedBlockReply.vue'
import { defineComponent } from "vue";

export default defineComponent({
    name: 'red-block',
    components: {
        RedBlockMessage, RedBlockReply
    }
})
</script>

<style>
.red-block {
  display: flex;
  flex-direction: column;
  background: red;
  flex: 2 0 100%;
  margin-bottom: 5px;
  min-height: 200px;
  padding: 10px;
  background: var(--block-color);
  border-radius: 5px;
}
</style>
