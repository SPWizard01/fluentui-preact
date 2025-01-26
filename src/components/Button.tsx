import {
  ButtonAppearance,
  ButtonDefinition,
  ButtonShape,
  ButtonSize,
  FluentDesignSystem,
  type Button as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface ButtonProps extends FluentProps<FluentElement> {
  disabled?: boolean;
  disabledFocusable?: boolean;
  appearance?: ButtonAppearance;
  iconOnly?: boolean;
  size?: ButtonSize;
  shape?: ButtonShape;
  value?: string;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-button": ButtonProps;
    }
  }
}

ButtonDefinition.define(FluentDesignSystem.registry);

export const Button = forwardRef<FluentElement, ButtonProps>((props, ref) => {
  return <fluent-button {...props} ref={ref} />;
});
