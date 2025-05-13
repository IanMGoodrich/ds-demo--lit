import { overrideStyles } from "./overrides.ts";

/* Import atomic component styles for use in all component */
import {linkStyles} from '../components/links/img-links.ts';
import { buttonStyles } from "@components/buttons/img-buttons.ts";

/* Add all imported styles to export array */
export const globalShared = 
[
  overrideStyles,
  linkStyles,
  buttonStyles,
]