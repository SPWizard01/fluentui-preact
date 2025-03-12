import {
  BadgeDefinition,
  FluentDesignSystem,
  type Badge as FluentElement,
  BadgeAppearance,
  BadgeColor,
  BadgeShape,
  BadgeSize,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface BadgeProps extends FluentProps<FluentElement, "start" | "end"> {
  /**
   * Sets the appearance of the badge to one of the predefined styles
   * @type `filled` | `outline` | `ghost` | `tint`
   * @default filled
   */
  appearance?: BadgeAppearance;
  /**
   * Sets the color of the badge to one of the predefined colors
   */
  color?: BadgeColor;
  /**
   * Sets the shape of the badge to one of the predefined shapes
   */
  shape?: BadgeShape;
  /**
   * Sets the size of the badge to one of the predefined sizes
   */
  size?: BadgeSize;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-badge": BadgeProps;
    }
  }
}

BadgeDefinition.define(FluentDesignSystem.registry);

export const Badge = forwardRef<FluentElement, BadgeProps>((props, ref) => {
  return <fluent-badge {...props} ref={ref} />;
});
