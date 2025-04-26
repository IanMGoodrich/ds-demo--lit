import { html } from 'lit';
import './img-swatches';
import '../scaling-grid/img-scaling-grid';
import { sharedThemes } from '../../utilities/types';

export default {
  title: 'Basic Elements/Theme Swatches',
  component: 'img-swatches',
  tags: ['autodocs'],
  argTypes: {
    theme: {
      options: sharedThemes,
      control: {
        type: 'select'
      }
    }
  },
  args: {
    theme: 'default'
  }
};


// @ts-expect-error because ts
export const Default = ({theme}) => html`
<img-swatches theme=${theme}></img-swatches>
`;