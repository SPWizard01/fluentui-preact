import {
  FluentDesignSystem,
  TabDefinition as FluentElementDefinition,
  type Tab as FluentElement,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type TabElement = FluentElement & WithChildrenAndSlots<"">;
export interface TabElementProps extends Partial<TabElement> {
  ref?: Ref<TabElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-tab": TabElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Tab = forwardRef<TabElement, TabElementProps>((props, ref) => {
  return <fluent-tab {...props} ref={ref} />;
});
