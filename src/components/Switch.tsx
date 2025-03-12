import {
  FluentDesignSystem,
  SwitchDefinition as FluentElementDefinition,
  type Switch as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type SwitchElement = FluentElement & WithChildrenAndSlots<"">;
export interface SwitchElementProps extends Partial<SwitchElement> {
  ref?: Ref<SwitchElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-switch": SwitchElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Switch = forwardRef<SwitchElement, SwitchElementProps>(
  (props, ref) => {
    return <fluent-switch {...props} ref={ref} />;
  }
);
