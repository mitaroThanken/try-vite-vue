import type { Meta, StoryObj } from '@storybook/vue3';
import TheDropdown from './TheDropdown.vue';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';

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
      template: `
  <TheDropdown v-model:open="args.open" @toggle="args.onToggle" @update:open="updateOpen">
    <template #summary>{{ args.summary }}</template>
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
    `,
    };
  },
  args: {
    open: false,
    summary: 'Theme',
  },
};
