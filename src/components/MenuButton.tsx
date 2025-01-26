import {
  MenuButtonDefinition,
  FluentDesignSystem,
  type MenuButton as FluentElement,
  MenuButtonAppearance,
  type MenuButtonOptions,
  MenuButtonSize,
  MenuButtonShape,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface MenuButtonProps extends FluentProps<FluentElement> {
  disabled?: boolean;
  disabledFocusable?: boolean;
  appearance?: MenuButtonAppearance;
  iconOnly?: boolean;
  size?: MenuButtonSize;
  shape?: MenuButtonShape;
  value?: string;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-menu-button": MenuButtonProps;
    }
  }
}

MenuButtonDefinition.define(FluentDesignSystem.registry);

export const MenuButton = forwardRef<FluentElement, MenuButtonProps>(
  (props, ref) => {
    return <fluent-menu-button {...props} ref={ref} />;
  }
);
