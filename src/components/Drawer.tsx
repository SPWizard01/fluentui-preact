import {
  DrawerDefinition,
  DrawerPosition,
  DrawerSize,
  DrawerType,
  FluentDesignSystem,
  type Drawer as FluentElement,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type DrawerElement = FluentElement & WithChildrenAndSlots<"">;
export interface DrawerElementProps extends Partial<DrawerElement> {
  ref?: Ref<DrawerElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-drawer": DrawerElementProps;
    }
  }
}

DrawerDefinition.define(FluentDesignSystem.registry);

export const Drawer = forwardRef<DrawerElement, DrawerElementProps>((props, ref) => {
  return <fluent-drawer {...props} ref={ref} />;
});
