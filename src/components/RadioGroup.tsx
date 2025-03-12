import {
  FluentDesignSystem,
  RadioGroupDefinition as FluentElementDefinition,
  type RadioGroup as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type RadioGroupElement = FluentElement & WithChildrenAndSlots<"">;
export interface RadioGroupElementProps extends Partial<RadioGroupElement> {
  ref?: Ref<RadioGroupElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-radio-group": RadioGroupElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const RadioGroup = forwardRef<RadioGroupElement, RadioGroupElementProps>(
  (props, ref) => {
    return <fluent-radio-group {...props} ref={ref} />;
  }
);
