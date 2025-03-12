import {
  accordionItemDefinition,
  AccordionItemMarkerPosition,
  AccordionItemSize,
  FluentDesignSystem,
  type AccordionItem as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface AccordionItemProps
  extends FluentProps<FluentElement, "heading"> {
  /**
   * Expands or collapses the item.
   * @type boolean
   * @default false
   */
  expanded?: boolean;
  /**
   * Configures the level of the heading element.
   * @type number
   * @default 2
   */
  "heading-level"?: number;
  /**
   * Disables the accordion item.
   * @type boolean
   * @default false
   */
  disabled?: boolean;
  /**
   * Controls the size of the Accordion Item.
   * @type `small` | `medium` | `large` | `extra-large`
   * @default `medium`
   */
  size?: AccordionItemSize;
  /**
   * Controls the position of the marker.
   * @type `start` | `end`
   * @default `start`
   */
  "marker-position"?: AccordionItemMarkerPosition;
  /**
   * Sets the width of the focus state.
   * @type boolean
   * @default false
   */
  block?: boolean;
}
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
