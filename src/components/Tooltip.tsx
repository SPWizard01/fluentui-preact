import {
  FluentDesignSystem,
  TooltipDefinition as FluentElementDefinition,
  type Tooltip as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type TooltipElement = FluentElement & WithChildrenAndSlots<"">;
export interface TooltipElementProps extends Partial<TooltipElement> {
  ref?: Ref<TooltipElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-tooltip": TooltipElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Tooltip = forwardRef<TooltipElement, TooltipElementProps>(
  (props, ref) => {
    return <fluent-tooltip {...props} ref={ref} />;
  }
);
