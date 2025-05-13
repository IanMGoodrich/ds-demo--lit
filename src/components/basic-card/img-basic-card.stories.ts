import { html } from 'lit';
import './img-basic-card';
import { sharedThemes } from '../../utilities/types';

export default {
  title: 'Components/BasicCard',
  component: 'img-basic-card',
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
<img-basic-card theme=${theme}>
  <span slot="eyebrow">Eyebrow Text</span>
  <h1 slot="heading">Card Heading</h1>
  <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
  <p slot="description"> This is a description of the card. It provides additional details about the card content.</p>
  <a slot="link-cta-primary" href="https://www.npr.org">Link to content</a>
</img-basic-card>
`;

// @ts-expect-error because ts
export const WithSilentLink = ({theme}) => html`
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
`;

// @ts-expect-error because ts
export const WithButtonCTA = ({theme}) => html`
<img-basic-card theme=${theme}>
  <span slot="eyebrow">Eyebrow Text</span>
  <h1 slot="heading">
    Card Heading
  </h1>
  <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
  <p slot="description">
    This is a description of the card. It provides additional details about the card content.
  </p>
  <button slot="button-cta-primary" tabindex=0>Button click</button>
  <button slot="button-cta-secondary">Button click</button>
</img-basic-card>
`;