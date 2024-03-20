<script setup lang="ts">
import { ref } from 'vue';
import { logEvent } from 'histoire/client';
import TheDropdown from '@/components/TheDropdown.vue';

const open = ref(false);

const handleToggle = (current: boolean) => {
  logEvent('toggle', { current });
};
</script>

<template>
  <Story>
    <TheDropdown v-model:open="open" @toggle="handleToggle">
      <template #summary>open or close</template>
      <ul class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </TheDropdown>
  </Story>
</template>
