<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

/** ドロップダウンとして取り扱う details */
const themeDropdownRef = ref<HTMLDetailsElement | null>(null);

/**
 * ドロップダウン外がクリックされたら、ドロップダウンを閉じる
 */
const handleClick = (e: MouseEvent) => {
  // ガード（実際には素通りするはず）
  if (themeDropdownRef.value === null) return;

  // ドロップダウン外がクリックされたら、ドロップダウンを閉じる
  if (
    // ドロップダウンが開いていて、
    themeDropdownRef.value.open &&
    // このコンポーネントのドロップダウン（＝details）の子でなければ
    (!(e.target instanceof HTMLElement) || e.target.closest('details') !== themeDropdownRef.value)
  ) {
    // （ドロップダウン外のクリックであるはずなので）強制的に閉じる
    themeDropdownRef.value.open = false;
  }
  // デフォルトの挙動は抑制しない
};

// イベントハンドラーの着脱
onMounted(() => {
  window.addEventListener('click', handleClick);
});
onBeforeUnmount(() => {
  window.removeEventListener('click', handleClick);
});
</script>

<template>
  <details ref="themeDropdownRef" class="dropdown">
    <summary tabindex="0" role="button" class="btn m-1">
      Theme
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
    <ul class="dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl">
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
  </details>
</template>
