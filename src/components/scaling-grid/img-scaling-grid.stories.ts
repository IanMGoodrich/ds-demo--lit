import { html } from 'lit';
import './img-scaling-grid';
import '../basic-card/img-basic-card';
import { sharedThemes } from '../../utilities/types';
import {gridItemAlignments, oneColLayouts} from './img-scaling-grid';
export default {
  title: 'Layout/Scaling Grid',
  component: 'img-scaling-grid',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Img Scaling Grid Component

Use \`<img-scaling-grid>\` to generate a css driven auto scaling grid of slotted content.  
You can control the layout and behavior with the following props.
  * \`columns\`: The maximum number of columns desired. default: \`4\`, 
  * \`row-gap\`:  The desired size of space between rows. Preferably in \`px\` or \`rem\` or css var such as\`var(--spacing-100-175)\`. default: \`1.5rem\`,
  * \`col-gap\`: The desired size of space between columns. Preferably in \`px\` or \`rem\` or css var such as\`var(--spacing-100-175)\`. default: \`1.5rem\`,
  * \`item-min-width\`: The minimum width slotted items should reach before dropping down a column in width. Use only \`px\` or \`rem\`. default: \`350px\`, 
  * \`align-items\`: The vertical alignment of slotted content in rows of greater than one. Use \`start\` \`end\` \`center\`, 
  * \`justify-items\`: The horizontal alignment of slotted content in rows of greater than one. Use \`start\` \`end\` \`center\`.  default: \`center\`, 
  * \`equal-height\`: Sets slotted content to \`display: flex\` \`height: 100%\` to make it stretch to match the height of other siblings in the same row. Note this may interfere with styles present on slotted content. default: \`false\`,
  * \`one-col-layout\`: When the grid less than the width of two columns but greater that the width of a single item, sets slotted content to either \`centered (margin: 0 auto)\` or \`full-width (width: 100%)\`. default: \`centered\`, 

#### Note:
When the grid shrinks to a single column the \`equal-height\` styles are removed.

#### Usage Example:
\`\`\`
<img-scaling-grid columns="3" row-gap="var(--spacing-75-150)" col-gap="var(--spacing-75-150)" equal-height one-col-layout="centered" >
    <img-basic-card>
      /Component Contents/
    </img-basic-card>
    <img-basic-card>
      /Component Contents/
    </img-basic-card>
    <img-basic-card>
      /Component Contents/
    </img-basic-card>
    <img-basic-card>
      /Component Contents/
    </img-basic-card>
    <img-basic-card>
      /Component Contents/
    </img-basic-card>
    <img-basic-card>
      /Component Contents/
    </img-basic-card>
    <img-basic-card>
      /Component Contents/
    </img-basic-card>
    <img-basic-card>
      /Component Contents/
    </img-basic-card>
</img-social-share>
\`\`\`
        `
      }
    }
  },
  argTypes: {
    theme: {
      description: 'Just for testing purposes',
      options: sharedThemes,
      control: {
        type: 'select'
      }
    },
    columns: {
      description: 'Max number of columns',
      control: {
        type: 'text'
      }
    },
    rowgap: {
      name: 'row-gap',
      description: 'Css value for desired space between rows',
      control: {
        type: 'text'
      }
    },
    colgap: {
      name: 'col-gap',
      description: 'Css value for desired space between columns',
      control: {
        type: 'text'
      }
    },
    itemWidth: {
      name: 'item-min-width',
      description: 'Min width in px or rem for slotted content.',
      control: {
        type: 'text'
      }
    },
    alignItems: {
      name: 'align-items',
      description: 'Vertical alignment of items.`center` `start` `end`',
      control: {
        type: 'select'
      },
      options: gridItemAlignments,
    },
    justifyItems: {
      name: 'justify-items',
      description: 'Horizontal alignment of items.`center` `start` `end`',
      control: {
        type: 'select'
      },
      options: gridItemAlignments,
    },
    oneColLayout: {
      name: 'one-col-layout',
      description: 'How slotted content handles single column layouts. `centered` or `full-width`',
      control: {
        type: 'select'
      },
      options: oneColLayouts,
    },
    equalHeight: {
      name: 'equal-height',
      description: 'If passed will make all items in rows of two or more the same height.',
      control: {
        type: 'boolean'
      }
    }

  },
  args: {
    theme: 'floral',
    columns: '4',
    itemWidth: '350px',
    rowgap: "var(--spacing-100-175)",
    colgap: "var(--spacing-100-175)",
    justifyItems: 'center',
    alignItems: 'center',
    equalHeight: true,
    oneColLayout: 'centered',
  }
};

//@ts-expect-error because ts
export const Default = ({theme, columns, itemWidth, rowgap, colgap, justifyItems, alignItems, equalHeight, oneColLayout}) => html`
  <img-scaling-grid columns=${columns} item-min-width=${itemWidth} row-gap=${rowgap} col-gap=${colgap} justify-items=${justifyItems} align-items=${alignItems} ?equal-height=${equalHeight} one-col-layout=${oneColLayout}>
  <img-basic-card theme=${theme}>
  <span slot="eyebrow">Eyebrow Text</span>
  <h1 slot="heading">Card Heading</h1>
  <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
  <p slot="description"> This is a description of the card. It provides additional details about the card content.</p>
  <a slot="cta" href="https://www.npr.org">Link to content</a>
</img-basic-card>
<img-basic-card theme=${theme}>
  <span slot="eyebrow">Eyebrow Text</span>
  <h1 slot="heading">Card Heading</h1>
  <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
  <p slot="description"> This is a description of the card. It provides additional details about the card content. This is a description of the card. It provides additional details about the card content. This is a description of the card. It provides additional details about the card content.</p>
  <a slot="cta" href="https://www.npr.org">Link to content</a>
</img-basic-card>
<img-basic-card theme=${theme}>
  <span slot="eyebrow">Eyebrow Text</span>
  <h1 slot="heading">Card Heading</h1>
  <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
  <p slot="description"> This is a description of the card. It provides additional details about the card content.</p>
  <a slot="cta" href="https://www.npr.org">Link to content</a>
</img-basic-card>
<img-basic-card theme=${theme}>
  <span slot="eyebrow">Eyebrow Text</span>
  <h1 slot="heading">Card Heading</h1>
  <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
  <p slot="description"> This is a description of the card. It provides additional details about the card content.</p>
  <a slot="cta" href="https://www.npr.org">Link to content</a>
</img-basic-card>
<img-basic-card theme=${theme}>
  <span slot="eyebrow">Eyebrow Text</span>
  <h1 slot="heading">Card Heading</h1>
  <img slot="image" src="https://picsum.photos/300/200" alt="Example Image" />
  <p slot="description"> This is a description of the card. It provides additional details about the card content.</p>
  <a slot="cta" href="https://www.npr.org">Link to content</a>
</img-basic-card>
</img-scaling-grid>
  `;