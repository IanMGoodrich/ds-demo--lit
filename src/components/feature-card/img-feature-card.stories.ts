import { html } from 'lit';
import './img-feature-card';
import { sharedThemes } from '../../utilities/types';

export default {
  title: 'Components/Feature Card',
  component: 'img-feature-card',
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
export const FeatureWithLink = ({theme}) => html`
<img-feature-card theme=${theme}>
  <span slot="eyebrow">Eyebrow Text</span>
  <h1 slot="heading">Feature Heading</h1>
  <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
  <p slot="description"> This is a description of the feature. It provides additional details about the feature card content. Praesent placerat, magna in vehicula vestibulum, felis urna cursus lorem, sed vestibulum quam eros vel libero. Vivamus commodo, odio sed fringilla pretium, sem nulla feugiat odio, in cursus elit dolor et ex. </p>
  <a slot="link-cta-primary" href="https://www.npr.org">Link to content</a>
</img-feature-card>
`;

// @ts-expect-error because ts
export const FeatureWithButton = ({theme}) => html`
<img-feature-card theme=${theme}>
  <span slot="eyebrow">Eyebrow Text</span>
  <h1 slot="heading">Feature Heading</h1>
  <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
  <p slot="description"> This is a description of the feature. It provides additional details about the feature card content. Praesent placerat, magna in vehicula vestibulum, felis urna cursus lorem, sed vestibulum quam eros vel libero. Vivamus commodo, odio sed fringilla pretium, sem nulla feugiat odio, in cursus elit dolor et ex. </p>
  <button slot="button-cta-primary">Click for more</a>
</img-feature-card>
`;

