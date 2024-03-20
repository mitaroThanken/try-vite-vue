<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TheDropdown from '@/components/TheDropdown.vue';

/** ローカルストレージ上のキー */
const LOCAL_STORAGE_KEY = 'theme';

/** テーマ */
const THEMES = ['default', 'retro', 'cyberpunk', 'valentine', 'aqua'];

/** 先頭一文字を大文字にする */
const ucFirst = (s: string) => `${s.at(0)?.toLocaleUpperCase()}${s.slice(1)}`;

/** 現時点のテーマ */
const currentTheme = ref(THEMES[0]);

/** テーマ選択時の処理 */
const handleInput = (e: Event) => {
  // 型の絞り込み
  if (!(e.target instanceof HTMLInputElement)) return;

  // 選択されたテーマを現時点のテーマとローカルストレージに反映
  currentTheme.value = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, e.target.value);
};

onMounted(() => {
  // マウント時にローカルストレージを参照
  let nextTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
  // ローカルストレージになかったり、想定外の値だったら
  if (nextTheme === null || !THEMES.includes(nextTheme)) {
    nextTheme = THEMES[0];
  }
  currentTheme.value = nextTheme;
});
</script>

<template>
  <TheDropdown>
    <template #summary> Theme </template>
    <ul class="z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl">
      <li v-for="theme in THEMES" :key="theme">
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
          :aria-label="ucFirst(theme)"
          :value="theme"
          :checked="currentTheme === theme"
          @input="handleInput"
        />
      </li>
    </ul>
  </TheDropdown>
</template>
