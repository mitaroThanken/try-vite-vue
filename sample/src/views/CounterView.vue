<script setup lang="ts">
import TheCounter from '@/components/TheCounter.vue'
</script>

<template>
  <div class="counter">
    <TheCounter />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .counter {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
