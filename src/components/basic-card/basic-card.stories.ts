import { html } from 'lit';
import './basic-card';
import { sharedThemes } from '../../utilities/types';

export default {
  title: 'Components/BasicCard',
  component: 'basic-card',
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
<basic-card theme=${theme}>
  <span slot="eyebrow">Eyebrow Text</span>
  <h1 slot="heading">Card Heading</h1>
  <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
  <p slot="description"> This is a description of the card. It provides additional details about the card content.</p>
  <a slot="cta" href="https://www.npr.org">Link to content</a>
</basic-card>
`;

// @ts-expect-error because ts
export const WithSilentLink = ({theme}) => html`
<basic-card theme=${theme}>
  <span slot="eyebrow">Eyebrow Text</span>
  <h1 slot="heading">
    Card Heading
  </h1>
  <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
  <p slot="description">
    This is a description of the card. It provides additional details about the card content.
  </p>
  <a slot="cta" href="https://www.npr.org"></a>
</basic-card>
`;