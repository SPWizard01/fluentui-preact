import {
  accordionDefinition,
  FluentDesignSystem,
  AccordionExpandMode,
  type Accordion as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface AccordionProps extends FluentProps<FluentElement> {
  expandmode?: AccordionExpandMode;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-accordion": AccordionProps;
    }
  }
}

accordionDefinition.define(FluentDesignSystem.registry);

export const Accordion = forwardRef<FluentElement, AccordionProps>(
  (props, ref) => {
    return <fluent-accordion {...props} ref={ref} />;
  }
);
