<script setup lang="ts">
import { ref } from 'vue';
import TheDropdown from '@/components/TheDropdown.vue';

// v-model のテスト：ドロップダウンを開いた状態を初期状態としてみる
const dropdownOpen = ref<boolean>(true);

// ref を確保し
const dropdownRef = ref<InstanceType<typeof TheDropdown> | null>(null);

// イベントハンドラと v-model で提供された値のテスト
const handleToggle = (current: boolean) => {
  console.info('dropdown.toggle', current);
  console.info('v-model:open', dropdownOpen.value);
};
</script>

<template>
  <TheDropdown ref="dropdownRef" v-model:open="dropdownOpen" @toggle="handleToggle">
    <template #summary> Theme </template>
    <ul class="z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl">
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
          aria-label="Default"
          value="default"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
          aria-label="Retro"
          value="retro"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
          aria-label="Cyberpunk"
          value="cyberpunk"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
          aria-label="Valentine"
          value="valentine"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
          aria-label="Aqua"
          value="aqua"
        />
      </li>
    </ul>
  </TheDropdown>
</template>
