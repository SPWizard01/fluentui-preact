import {
  DrawerBodyDefinition,
  FluentDesignSystem,
  type DrawerBody as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface DrawerBodyProps extends FluentProps<FluentElement> {}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-drawer-body": DrawerBodyProps;
    }
  }
}

DrawerBodyDefinition.define(FluentDesignSystem.registry);

export const DrawerBody = forwardRef<FluentElement, DrawerBodyProps>((props, ref) => {
  return <fluent-drawer-body {...props} ref={ref} />;
});
