import type { Preview } from '@storybook/web-components'
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
       expanded: true,
      },
    },
  },
};

export default preview;