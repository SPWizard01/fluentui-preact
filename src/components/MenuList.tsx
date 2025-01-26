import {
  FluentDesignSystem,
  MenuListDefinition as FluentElementDefinition,
  type MenuList as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface MenuListProps extends FluentProps<FluentElement> {}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-menu-list": MenuListProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const MenuList = forwardRef<FluentElement, MenuListProps>(
  (props, ref) => {
    return <fluent-menu-list {...props} ref={ref} />;
  }
);
