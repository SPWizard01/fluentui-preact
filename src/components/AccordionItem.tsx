import {
  accordionItemDefinition,
  FluentDesignSystem,
  type AccordionItem as FluentElement,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type AccordionItemElement = FluentElement & WithChildrenAndSlots<"heading">;
export interface AccordionItemElementProps
  extends Partial<AccordionItemElement> {
  ref?: Ref<AccordionItemElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-accordion-item": AccordionItemElementProps;
    }
  }
}

accordionItemDefinition.define(FluentDesignSystem.registry);

export const AccordionItem = forwardRef<
  AccordionItemElement,
  AccordionItemElementProps
>((props, ref) => {
  return <fluent-accordion-item {...props} ref={ref} />;
});
