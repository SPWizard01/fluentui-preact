import {
  FluentDesignSystem,
  MenuItemDefinition as FluentElementDefinition,
  type MenuItem as FluentElement,
  MenuItemRole,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface MenuItemProps extends FluentProps<FluentElement> {
  disabled?: boolean;
  role?: MenuItemRole;
  checked?: boolean;
  hidden?: boolean;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-menu-item": MenuItemProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const MenuItem = forwardRef<FluentElement, MenuItemProps>(
  (props, ref) => {
    return <fluent-menu-item {...props} ref={ref} />;
  }
);
