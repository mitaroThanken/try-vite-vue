<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from '../stores/counter';

const store = useCounterStore();
const localCount = ref(0);

const increment = () => {
  localCount.value++;
  store.increment();
};
</script>

<template>
  <h1>This is an counter</h1>
  <p>localCount: {{ localCount }}</p>
  <p>store.count: {{ store.count }}</p>
  <p>store.doubleCount: {{ store.doubleCount }}</p>
  <button class="btn btn-primary rounded-full" @click="increment">increment</button>
</template>
