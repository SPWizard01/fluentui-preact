import {
  FluentDesignSystem,
  RadioGroupDefinition as FluentElementDefinition,
  RadioGroupOrientation,
  type RadioGroup as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface RadioGroupProps extends FluentProps<FluentElement> {
  name?: string;
  disabled?: boolean;
  orientation?: RadioGroupOrientation;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-radio-group": RadioGroupProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const RadioGroup = forwardRef<FluentElement, RadioGroupProps>((props, ref) => {
  return <fluent-radio-group {...props} ref={ref} />;
});
