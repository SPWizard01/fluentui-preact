import {
  MenuDefinition,
  FluentDesignSystem,
  type Menu as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface MenuProps extends FluentProps<FluentElement> {
  split?: boolean;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-menu": MenuProps;
    }
  }
}

MenuDefinition.define(FluentDesignSystem.registry);

export const Menu = forwardRef<FluentElement, MenuProps>((props, ref) => {
  return <fluent-menu {...props} ref={ref} />;
});
