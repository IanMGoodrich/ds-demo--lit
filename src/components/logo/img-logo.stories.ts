import { html } from 'lit';
import './img-logo';
import { sharedThemes } from '../../utilities/types';
import { logoVariants } from './img-logo';
export default {
  title: 'Components/Logo',
  component: 'img-logo',
  tags: ['autodocs'],
  argTypes: {
    theme: {
      options: sharedThemes,
      control: {
        type: 'select'
      }
    },
    logo: {
      options: logoVariants,
      control: {
        type: 'select'
      }
    },
  },
  args: {
  }
};

// @ts-expect-error because ts
export const Default = ({logo, theme}) => html`
  <img-logo theme=${theme} logo=${logo}></img-logo>
`;