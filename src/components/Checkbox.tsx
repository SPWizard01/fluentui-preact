import {
  CheckboxDefinition,
  CheckboxShape,
  CheckboxSize,
  FluentDesignSystem,
  type Checkbox as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface CheckboxProps extends FluentProps<FluentElement> {
  disabled?: boolean;
  autofocus?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  name?: string;
  required?: boolean;
  value?: string;
  shape?: CheckboxShape;
  size?: CheckboxSize;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-checkbox": CheckboxProps;
    }
  }
}

CheckboxDefinition.define(FluentDesignSystem.registry);

export const Checkbox = forwardRef<FluentElement, CheckboxProps>((props, ref) => {
  return <fluent-checkbox {...props} ref={ref} />;
});
