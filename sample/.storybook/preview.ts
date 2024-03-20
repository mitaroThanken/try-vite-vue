import '../src/assets/tailwind.css';

import type { Preview } from '@storybook/vue3';

import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      // nameOfTheme: 'dataAttributeForTheme',
      light: 'light',
      dark: 'dark',
      cupcake: 'cupcake',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
];

export default preview;
