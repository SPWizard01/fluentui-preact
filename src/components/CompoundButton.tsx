import {
  FluentDesignSystem,
  CompoundButtonDefinition as FluentElementDefinition,
  type CompoundButton as FluentElement,
  CompoundButtonAppearance,
  CompoundButtonShape,
  CompoundButtonSize,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface CompoundButtonProps extends FluentProps<FluentElement> {
  disabled?: boolean;
  disabledFocusable?: boolean;
  appearance?: CompoundButtonAppearance;
  shape?: CompoundButtonShape;
  size?: CompoundButtonSize;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-compound-button": CompoundButtonProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const CompoundButton = forwardRef<FluentElement, CompoundButtonProps>(
  (props, ref) => {
    return <fluent-compound-button {...props} ref={ref} />;
  }
);
