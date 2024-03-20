import type { Meta, StoryObj } from '@storybook/vue3';
import TheDropdown from '@/components/TheDropdown.vue';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

// フォーマッターにこのテンプレートは HTML であると見せかけつつ
// 実態は文字列のままとする
const html = String.raw;

const meta: Meta<typeof TheDropdown> = {
  component: TheDropdown,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TheDropdown>;

export const Default: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs<typeof args>();

    return {
      components: { TheDropdown },
      setup() {
        const updateOpen = (current: boolean) => {
          updateArgs({ open: current });
        };
        updateArgs({ onToggle: action('toggle') });
        return { args, updateOpen };
      },
      template: html`
        <TheDropdown v-model:open="args.open" @toggle="args.onToggle" @update:open="updateOpen">
          <template #summary>{{ args.summary }}</template>
          <ul tabindex="0" class="z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </TheDropdown>
      `,
    };
  },
  args: {
    open: false,
    summary: 'open and close',
  },
};
