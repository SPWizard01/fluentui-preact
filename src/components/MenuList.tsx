import {
  FluentDesignSystem,
  MenuListDefinition as FluentElementDefinition,
  type MenuList as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type MenuListElement = FluentElement & WithChildrenAndSlots<"">;
export interface MenuListElementProps extends Partial<MenuListElement> {
  ref?: Ref<MenuListElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-menu-list": MenuListElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const MenuList = forwardRef<MenuListElement, MenuListElementProps>(
  (props, ref) => {
    return <fluent-menu-list {...props} ref={ref} />;
  }
);
