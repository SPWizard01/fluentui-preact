import {
  accordionDefinition,
  FluentDesignSystem,
  type Accordion as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type AccordionElement = FluentElement & WithChildrenAndSlots<"heading">;
export interface AccordionElementProps extends Partial<AccordionElement> {
  ref?: Ref<AccordionElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-accordion": AccordionElementProps;
    }
  }
}

accordionDefinition.define(FluentDesignSystem.registry);

export const Accordion = forwardRef<AccordionElement, AccordionElementProps>(
  (props, ref) => {
    return <fluent-accordion {...props} ref={ref} />;
  }
);
