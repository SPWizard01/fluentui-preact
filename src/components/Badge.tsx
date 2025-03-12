import {
  BadgeDefinition,
  FluentDesignSystem,
  type Badge as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type BadgeElement = FluentElement & WithChildrenAndSlots<"start" | "end">;
export interface BadgeElementProps extends Partial<BadgeElement> {
  ref?: Ref<BadgeElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-badge": BadgeElementProps;
    }
  }
}

BadgeDefinition.define(FluentDesignSystem.registry);

export const Badge = forwardRef<BadgeElement, BadgeElementProps>(
  (props, ref) => {
    return <fluent-badge {...props} ref={ref} />;
  }
);
