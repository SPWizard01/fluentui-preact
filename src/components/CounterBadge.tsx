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

export interface CounterBadgeProps extends FluentProps<FluentElement> {
  appearance?: CounterBadgeAppearance;
  color?: CounterBadgeColor;
  shape?: CounterBadgeShape;
  size?: CounterBadgeSize;
  dot?: boolean;
  showZero?: boolean;
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
