import {
  CounterBadgeDefinition,
  FluentDesignSystem,
  type CounterBadge as FluentElement,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type CounterBadgeElement = FluentElement & WithChildrenAndSlots<"start" | "end">;
export interface CounterBadgeElementProps extends Partial<CounterBadgeElement> {
  ref?: Ref<CounterBadgeElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-counter-badge": CounterBadgeElementProps;
    }
  }
}

CounterBadgeDefinition.define(FluentDesignSystem.registry);

export const CounterBadge = forwardRef<
  CounterBadgeElement,
  CounterBadgeElementProps
>((props, ref) => {
  return <fluent-counter-badge {...props} ref={ref} />;
});
