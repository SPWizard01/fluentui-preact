import {
  CounterBadgeDefinition,
  FluentDesignSystem,
  type CounterBadge as FluentElement,
  CounterBadgeSize,
  CounterBadgeShape,
  CounterBadgeColor,
  CounterBadgeAppearance,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface CounterBadgeProps
  extends FluentProps<FluentElement, "start" | "end"> {
  /**
   * Sets the appearance of the badge to one of the predefined styles
   */
  appearance?: CounterBadgeAppearance;
  /**
   * Sets the color of the badge to one of the predefined colors
   */
  color?: CounterBadgeColor;
  /**
   * Sets the shape of the badge to one of the predefined shapes
   */
  shape?: CounterBadgeShape;
  /**
   * Sets the size of the badge to one of the predefined sizes
   */
  size?: CounterBadgeSize;
  /**
   * Sets the badge's dot state.
   */
  dot?: boolean;
  /**
   * Sets the badge's show-zero state.
   */
  "show-zero"?: boolean;
  /**
   * Sets the badge's count attribute
   */
  count?: number;
  /**
   * Sets the badge's overflow count attribute
   */
  "overflow-count"?: number;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-counter-badge": CounterBadgeProps;
    }
  }
}

CounterBadgeDefinition.define(FluentDesignSystem.registry);

export const CounterBadge = forwardRef<FluentElement, CounterBadgeProps>(
  (props, ref) => {
    return <fluent-counter-badge {...props} ref={ref} />;
  }
);
