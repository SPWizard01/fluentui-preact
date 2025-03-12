import {
  MenuButtonDefinition,
  FluentDesignSystem,
  type MenuButton as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type MenuButtonElement = FluentElement & WithChildrenAndSlots;
export interface MenuButtonElementProps extends Partial<MenuButtonElement> {
  ref?: Ref<MenuButtonElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-menu-button": MenuButtonElementProps;
    }
  }
}

MenuButtonDefinition.define(FluentDesignSystem.registry);

export const MenuButton = forwardRef<MenuButtonElement, MenuButtonElementProps>(
  (props, ref) => {
    return <fluent-menu-button {...props} ref={ref} />;
  }
);
