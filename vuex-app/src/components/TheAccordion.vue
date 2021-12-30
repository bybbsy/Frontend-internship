<template>
  <div class="product-accordion" :class="{ open: isOpen }">
    <div class="accordion-header" @click="toggleAccordion">
      <slot name='accordion-title'/>
      <i class="fas fa-chevron-down" :class="{ close: isOpen }"></i>
    </div>
    <div v-show="isOpen" class="content">
      <slot name="content"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: 'the-accordion',
  setup() {
    let isOpen: Ref<boolean> = ref(false);

    function toggleAccordion() {
      isOpen.value = !isOpen.value;
    }

    return {
      isOpen,
      toggleAccordion
    }
  }
})
</script>

<style>
.accordion-header {
  cursor: pointer;
  display: flex;
  width: fit-content;
}

.product-accordion {
  margin: 15px 25px 5px;
}

.fas.fa-chevron-down {
  transition: 0.5s all ease;
}

.fas.fa-chevron-down.close {
  color: tomato;
  transform: rotateX(180deg);
}
</style>
