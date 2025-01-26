import {
  accordionItemDefinition,
  FluentDesignSystem,
  type AccordionItem as FluentElement,
} from "@fluentui/web-components";
import type { ComponentChildren, JSX } from "preact";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface AccordionItemProps extends FluentProps<FluentElement> {}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-accordion-item": AccordionItemProps;
    }
  }
}

accordionItemDefinition.define(FluentDesignSystem.registry);

export const AccordionItem = forwardRef<FluentElement, AccordionItemProps>(
  (props, ref) => {
    return <fluent-accordion-item {...props} ref={ref} />;
  }
);
