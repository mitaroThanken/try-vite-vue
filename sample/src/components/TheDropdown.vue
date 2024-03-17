<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

/** ドロップダウンの開閉（v-model） */
const open = defineModel<boolean>('open', { default: false });

/** ドロップダウンの開閉（イベント） */
const emit = defineEmits<{
  toggle: [open: boolean];
}>();

/** ドロップダウンとして取り扱う details */
const dropdownRef = ref<HTMLDetailsElement | null>(null);

/**
 * ドロップダウン外がクリックされたら、ドロップダウンを閉じる
 */
const handleClick = (e: MouseEvent) => {
  // ガード（実際には素通りするはず）
  if (dropdownRef.value === null) return;

  // ドロップダウン外がクリックされたら、ドロップダウンを閉じる
  if (
    // ドロップダウンが開いていて、
    dropdownRef.value.open &&
    // このコンポーネントのドロップダウン（＝details）の子でなければ
    (!(e.target instanceof HTMLElement) || e.target.closest('details') !== dropdownRef.value)
  ) {
    // （ドロップダウン外のクリックであるはずなので）強制的に閉じる
    dropdownRef.value.open = false;
  }
  // デフォルトの挙動は抑制しない
};

/**
 * ドロップダウンの開閉をイベントとv-modelで通知する
 */
const handleToggle = (e: Event) => {
  const current = (e.target as HTMLDetailsElement).open;
  open.value = current;
  emit('toggle', current);
};

// イベントハンドラーの着脱
onMounted(() => {
  window.addEventListener('click', handleClick);
  dropdownRef.value?.addEventListener('toggle', handleToggle);
});
onBeforeUnmount(() => {
  window.removeEventListener('click', handleClick);
  dropdownRef.value?.removeEventListener('toggle', handleToggle);
});
</script>

<template>
  <details ref="dropdownRef" class="dropdown" :open="open">
    <summary tabindex="0" role="button" class="btn m-1">
      <slot name="summary"></slot>
      <svg
        width="12px"
        height="12px"
        class="inline-block size-2 fill-current opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </summary>
    <slot></slot>
  </details>
</template>
