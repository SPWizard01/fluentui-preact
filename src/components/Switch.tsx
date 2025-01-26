import {
  FluentDesignSystem,
  SwitchDefinition as FluentElementDefinition,
  type Switch as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface SwitchProps extends FluentProps<FluentElement> {
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-switch": SwitchProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Switch = forwardRef<FluentElement, SwitchProps>((props, ref) => {
  return <fluent-switch {...props} ref={ref} />;
});
