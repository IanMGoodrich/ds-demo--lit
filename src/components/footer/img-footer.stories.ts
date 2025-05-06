import { html } from 'lit';
import './img-footer';
import { sharedThemes } from '../../utilities/types';
import '../logo/img-logo'
import '../social-share/img-social-share';

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
    theme: 'floral',
  }
};

//@ts-expect-error because ts
export const Default = ({theme, logo}) => html`
  <img-footer theme=${theme}>
    <img-logo theme=${theme} slot="logo" logoSize="300px" logo=${theme}></img-logo>
    <nav slot="top-nav">
      <ul>
        <li><a href="#">About</a>
          <ul>
            <li><a href="#">Our history</a></li>
            <li><a href="#">Our team</a></li>
            <li><a href="#">Our mission</a></li>
            <li><a href="#">Our successes</a></li>
          </ul>
        </li>
        <li><a href="#">Services</a>
          <ul>
            <li><a href="#">Client relations</a></li>
            <li><a href="#">Data management</a></li>
            <li><a href="#">Leadership training</a></li>
            <li><a href="#">Industrial strategies</a></li>
          </ul>
        </li>
        <li><a href="#">Careers</a>
          <ul>
            <li><a href="#">Apprenticeships </a></li>
            <li><a href="#">Data analyst</a></li>
            <li><a href="#">Legal tram</a></li>
            <li><a href="#">Project management</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <ul slot="legal">
      <li><a href="#">Accessibility</a></li>
      <li><a href="#">Terms of use</a></li>
      <li><a href="#">Privacy & Legal</a></li>
    </ul>
    <img-social-share theme=${theme} li yt insta twx fb slot="social"></img-social-share>
    <p slot="copyright">© 2025 ${theme} Industries</p>
  </img-footer>
  `;