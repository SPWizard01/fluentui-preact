import {
  DrawerDefinition,
  DrawerPosition,
  DrawerSize,
  DrawerType,
  FluentDesignSystem,
  type Drawer as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface DrawerProps extends FluentProps<FluentElement> {
  position?: DrawerPosition;
  size?: DrawerSize;
  type?: DrawerType;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-drawer": DrawerProps;
    }
  }
}

DrawerDefinition.define(FluentDesignSystem.registry);

export const Drawer = forwardRef<FluentElement, DrawerProps>((props, ref) => {
  return <fluent-drawer {...props} ref={ref} />;
});
