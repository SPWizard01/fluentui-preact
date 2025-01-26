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

export interface BadgeProps extends FluentProps<FluentElement> {
  appearance?: BadgeAppearance;
  color?: BadgeColor;
  shape?: BadgeShape;
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
