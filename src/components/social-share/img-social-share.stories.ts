import { html } from 'lit';
import './img-social-share';
import { sharedThemes } from '../../utilities/types';

export default {
  title: 'Components/Social Share',
  component: 'img-social-share',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Img Social Share Component

Use \`<img-social-share>\` to provide a set of social sharing links.  
You can customize it with a theme and specify the URL to share.

#### Notes:
- These are the media sites/types the component currently supports along with their associated props:
  * Facebook: \`fb\`, 
  * Twitter/X: \`twx\`,
  * Instagram: \`insta\` 
  * LinkedIn: \`li\`, 
  * Email: \`email\`
- The component pulls in data set in \`./socialData.ts\` which follows this pattern:
  \`facebook: {
    svg:'facebook', (name of associated svg found in src/assets/vectors.ts)
    share: 'https://www.facebook.com/sharer/sharer.php?u=', (site specific prefix)
    home: 'https://www.your-company-here.com' (company/client home url) 
  }\`
- Use the \`shareCurrent\` prop to dynamically link to the current page.
- Use the \`shareURL\` to pass a specific url to build into the shared post.
- If neither prop is passed the default/homepage url will be the url used to generate the post.
#### Usage Example:
\`\`\`
<img-social-share 
theme="default" 
shareURL="https://www.your-company-here.com/articles/why-were-so-cool" 
fb
li
insta
email>
</img-social-share>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    theme: {
      options: sharedThemes,
      control: {
        type: 'select'
      },
      description: "Choice between different example themes"
    },
    shareURL: {
      control: {
        type: 'text'
      },
      description: "Specific url to share via social media link that is not the current page or a preset homepage."
    },
    shareCurrent: {
      control: {
        type: 'boolean'
      },
      description: "If set, will automatically generate a share link for the page the link is placed on."
    }
  },
  args: {
    theme: 'default',
    shareURL: 'www.npr.org',
  }
};


// @ts-expect-error because ts
export const Default = ({theme, shareURL}) => html`
<img-social-share theme=${theme} shareURL=${shareURL} fb twx insta li email>
</img-social-share>
`;
