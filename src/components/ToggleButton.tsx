import {
  ToggleButtonDefinition as FluentElementDefinition,
  FluentDesignSystem,
  type ToggleButton as FluentElement,
  ToggleButtonAppearance,
  ToggleButtonSize,
  ToggleButtonShape,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface ToggleButtonProps extends FluentProps<FluentElement> {
  disabled?: boolean;
  disabledFocusable?: boolean;
  appearance?: ToggleButtonAppearance;
  iconOnly?: boolean;
  size?: ToggleButtonSize;
  shape?: ToggleButtonShape;
  value?: string;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-toggle-button": ToggleButtonProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const ToggleButton = forwardRef<FluentElement, ToggleButtonProps>(
  (props, ref) => {
    return <fluent-toggle-button {...props} ref={ref} />;
  }
);
