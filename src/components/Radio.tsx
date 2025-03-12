import {
  FluentDesignSystem,
  RadioDefinition as FluentElementDefinition,
  type Radio as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type RadioElement = FluentElement & WithChildrenAndSlots<"">;
export interface RadioElementProps extends Partial<RadioElement> {
  ref?: Ref<RadioElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-radio": RadioElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Radio = forwardRef<RadioElement, RadioElementProps>((props, ref) => {
  return <fluent-radio {...props} ref={ref} />;
});
