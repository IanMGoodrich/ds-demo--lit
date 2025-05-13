import { html } from 'lit';
import './img-container';
import { sharedThemes } from '../../utilities/types';
import { containerWidths } from './img-container';
import '../basic-card/img-basic-card';
import '../scaling-grid/img-scaling-grid';
import '../footer/img-footer';
import '../social-share/img-social-share';
import '../svg/img-svg';
import '../logo/img-logo';
export default {
  title: 'Layout/Container',
  component: 'img-container',
  tags: ['autodocs'],
  argTypes: {
    width: {
      options: containerWidths,
      control: {
        type: 'select'
      }
    },
    topPadding: {
      control: {
        type: 'text'
      }
    },
    bottomPadding: {
      control: {
        type: 'text'
      }
    },
    sidePadding: {
      control: {
        type: 'text'
      }
    },
    colGap: {
      control: {
        type: 'text'
      }
    },
    rowGap: {
      control: {
        type: 'text'
      }
    },
    theme: {
      options: sharedThemes,
      control: {
        type: 'select'
      }
    },
  },
  args: {
    theme: 'default',
    width: 'narrow',
    sidePadding: 'var(--spacing-100-175)',
    topPadding: 'var(--spacing-50-100)',
    bottomPadding: '4rem',
    rowGap: '1.5rem',
    colGap: '2rem',
  },
  parameters: {
    layout: 'fullscreen'
  }
};


// @ts-expect-error because ts
export const Default = ({theme, width, rowGap, colGap, topPadding, bottomPadding, sidePadding}) => html`
<img-container width=${width} row-gap=${rowGap} col-gap=${colGap} top-padding=${topPadding} bottom-padding=${bottomPadding} side-padding=${sidePadding}>
  <img-scaling-grid columns="3" col-gap="2rem" row-gap="2rem">
    <img-basic-card theme=${theme}>
      <span slot="eyebrow">Eyebrow Text</span>
      <h1 slot="heading">
        Card Heading
      </h1>
      <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
      <p slot="description">
        This is a description of the card. It provides additional details about the card content.
      </p>
      <a slot="link-cta-primary" href="https://www.npr.org"></a>
    </img-basic-card>
    <img-basic-card theme=${theme}>
      <span slot="eyebrow">Eyebrow Text</span>
      <h1 slot="heading">
        Card Heading
      </h1>
      <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
      <p slot="description">
        This is a description of the card. It provides additional details about the card content.
      </p>
      <a slot="link-cta-primary" href="https://www.npr.org"></a>
    </img-basic-card>
    <img-basic-card theme=${theme}>
      <span slot="eyebrow">Eyebrow Text</span>
      <h1 slot="heading">
        Card Heading
      </h1>
      <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
      <p slot="description">
        This is a description of the card. It provides additional details about the card content.
      </p>
      <a slot="link-cta-primary" href="https://www.npr.org"></a>
    </img-basic-card>
    <img-basic-card theme=${theme}>
      <span slot="eyebrow">Eyebrow Text</span>
      <h1 slot="heading">
        Card Heading
      </h1>
      <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
      <p slot="description">
        This is a description of the card. It provides additional details about the card content.
      </p>
      <a slot="link-cta-primary" href="https://www.npr.org"></a>
    </img-basic-card>
    <img-basic-card theme=${theme}>
      <span slot="eyebrow">Eyebrow Text</span>
      <h1 slot="heading">
        Card Heading
      </h1>
      <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
      <p slot="description">
        This is a description of the card. It provides additional details about the card content.
      </p>
      <a slot="link-cta-primary" href="https://www.npr.org"></a>
    </img-basic-card>
    <img-basic-card theme=${theme}>
      <span slot="eyebrow">Eyebrow Text</span>
      <h1 slot="heading">
        Card Heading
      </h1>
      <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
      <p slot="description">
        This is a description of the card. It provides additional details about the card content.
      </p>
      <a slot="link-cta-primary" href="https://www.npr.org"></a>
    </img-basic-card>
    <img-basic-card theme=${theme}>
      <span slot="eyebrow">Eyebrow Text</span>
      <h1 slot="heading">
        Card Heading
      </h1>
      <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
      <p slot="description">
        This is a description of the card. It provides additional details about the card content.
      </p>
      <a slot="link-cta-primary" href="https://www.npr.org"></a>
    </img-basic-card>
    <img-basic-card theme=${theme}>
      <span slot="eyebrow">Eyebrow Text</span>
      <h1 slot="heading">
        Card Heading
      </h1>
      <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
      <p slot="description">
        This is a description of the card. It provides additional details about the card content.
      </p>
      <a slot="link-cta-primary" href="https://www.npr.org"></a>
    </img-basic-card>
    <img-basic-card theme=${theme}>
      <span slot="eyebrow">Eyebrow Text</span>
      <h1 slot="heading">
        Card Heading
      </h1>
      <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
      <p slot="description">
        This is a description of the card. It provides additional details about the card content.
      </p>
      <a slot="link-cta-primary" href="https://www.npr.org"></a>
    </img-basic-card>
  </img-scaling-grid>
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
</img-container>
`;