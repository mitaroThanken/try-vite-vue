import type { Meta, StoryObj } from '@storybook/vue3';
import ThemeController from '@/components/ThemeController.vue';

// フォーマッターにこのテンプレートは HTML であると見せかけつつ
// 実態は文字列のままとする
const html = String.raw;

const meta: Meta<typeof ThemeController> = {
  component: ThemeController,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ThemeController>;

export const Default: Story = {
  render: () => ({
    components: { ThemeController },
    template: html`<ThemeController />`,
  }),
};
