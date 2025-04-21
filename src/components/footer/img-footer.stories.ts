import { html } from 'lit';
import './img-footer';
import { sharedThemes } from '../../utilities/types';
import '../logo/img-logo'

export default {
  title: 'Components/Footer',
  component: 'img-footer',
  tags: ['autodocs'],
  argTypes: {
    theme: {
      options: sharedThemes,
      control: {
        type: 'select'
      }
    },
  },
  args: {
  }
};

//@ts-expect-error because ts
export const Default = ({theme, logo}) => html`
  <img-footer>
    <img-logo theme=${theme} slot="logo" logoSize="300px" logo=${theme}></img-logo>
    <nav slot="top-nav">
      <ul>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
      </ul>
    </nav>
  </img-footer>
  <nav>
    <ul>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
    </ul>
  </nav>
  `;