import { html } from 'lit';
import './img-svg';
import svgs from '../../assets/vectors';

export default {
  title: 'Components/SVG',
  component: 'img-svg',
  tags: ['autodocs'],
  argTypes: {
    name: {
      options: [...Object.keys(svgs)],
      control: {
        type: 'select'
      }
    },
    size: {
      control: {
        type: 'text'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    },
    color: {
      control: {
        type: 'text'
      }
    },
    decorative: {
      control: {
        type: 'boolean'
      }
    },
  },
  args: {
    name: 'search',
    size: '20px',
    color: 'var(--cl-powder-blue)',
    decorative: true,
  }
};

// @ts-expect-error because ts
export const Default = ({name, color, size, decorative, label}) => html`
  <img-svg name=${name} color=${color} size=${size} label=${label} .decorative=${decorative}></img-svg>
`;