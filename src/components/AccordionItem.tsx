import {
  accordionItemDefinition,
  FluentDesignSystem,
  AccordionItemOptions,
  type AccordionItem as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface AccordionItemProps extends FluentProps<FluentElement, "heading"> {
  expanded?: boolean;
  "heading-level"?: number;
  // disabled?: boolean;
}
type AccProps = FluentProps<FluentElement, "heading">;
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-accordion-item": AccProps;
    }
  }
}

accordionItemDefinition.define(FluentDesignSystem.registry);

export const AccordionItem = forwardRef<FluentElement, AccProps>(
  (props, ref) => {
    return <fluent-accordion-item {...props} ref={ref} />;
  }
);
