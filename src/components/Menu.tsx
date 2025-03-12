import {
  MenuDefinition,
  FluentDesignSystem,
  type Menu as FluentElement,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type MenuElement = FluentElement & WithChildrenAndSlots<"trigger" | "primary-action">;
export interface MenuElementProps extends Partial<MenuElement> {
  ref?: Ref<MenuElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-menu": MenuElementProps;
    }
  }
}

MenuDefinition.define(FluentDesignSystem.registry);

export const Menu = forwardRef<MenuElement, MenuElementProps>((props, ref) => {
  return <fluent-menu {...props} ref={ref} />;
});
