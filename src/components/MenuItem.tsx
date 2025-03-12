import {
  FluentDesignSystem,
  MenuItemDefinition as FluentElementDefinition,
  type MenuItem as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type MenuItemElement = FluentElement & WithChildrenAndSlots<"">;
export interface MenuItemElementProps extends Partial<MenuItemElement> {
  ref?: Ref<MenuItemElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-menu-item": MenuItemElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const MenuItem = forwardRef<MenuItemElement, MenuItemElementProps>(
  (props, ref) => {
    return <fluent-menu-item {...props} ref={ref} />;
  }
);
