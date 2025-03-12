import {
  DrawerBodyDefinition,
  FluentDesignSystem,
  type DrawerBody as FluentElement,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type DrawerBodyElement = FluentElement & WithChildrenAndSlots<"title">;
export interface DrawerBodyElementProps extends Partial<DrawerBodyElement> {
  ref?: Ref<DrawerBodyElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-drawer-body": DrawerBodyElementProps;
    }
  }
}

DrawerBodyDefinition.define(FluentDesignSystem.registry);

export const DrawerBody = forwardRef<DrawerBodyElement, DrawerBodyElementProps>((props, ref) => {
  return <fluent-drawer-body {...props} ref={ref} />;
});
