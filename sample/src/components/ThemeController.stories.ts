import type { Meta, StoryObj } from '@storybook/vue3';
import ThemeController from './ThemeController.vue';

const meta: Meta<typeof ThemeController> = {
  component: ThemeController,
};

export default meta;

type Story = StoryObj<typeof ThemeController>;

export const Default: Story = {
  render: () => ({
    components: { ThemeController },
    template: '<ThemeController />',
  }),
};
