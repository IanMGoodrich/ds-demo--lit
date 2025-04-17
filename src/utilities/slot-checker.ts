import { LitElement } from "lit";

export const slotChecker = (host: LitElement, slotName:string, ref: Array<HTMLElement>) => {
  const queryWorks = host.shadowRoot?.querySelector(`slot[name=${slotName}]`);
  const hrdCode = host.shadowRoot?.querySelector('slot[name=heading]')
  const noShadow = host.querySelector(`slot[name=${slotName}]`);
  const refRef = ref.length
  console.log(host,slotName, queryWorks, noShadow, hrdCode, ref, refRef);
  
 return host.shadowRoot?.querySelector(`slot[name=${slotName}]`)?.assignedSlot?.hasChildNodes? true : false;
}
