import {
  ToggleButtonDefinition as FluentElementDefinition,
  FluentDesignSystem,
  type ToggleButton as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type ToggleButtonElement = FluentElement & WithChildrenAndSlots<"">;
export interface ToggleButtonElementProps extends Partial<ToggleButtonElement> {
  ref?: Ref<ToggleButtonElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-toggle-button": ToggleButtonElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const ToggleButton = forwardRef<
  ToggleButtonElement,
  ToggleButtonElementProps
>((props, ref) => {
  return <fluent-toggle-button {...props} ref={ref} />;
});
