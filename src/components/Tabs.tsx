import {
  FluentDesignSystem,
  TabsDefinition as FluentElementDefinition,
  type Tabs as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type TabsElement = FluentElement & WithChildrenAndSlots<"">;
export interface TabsElementProps extends Partial<TabsElement> {
  ref?: Ref<TabsElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-tabs": TabsElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Tabs = forwardRef<TabsElement, TabsElementProps>((props, ref) => {
  return <fluent-tabs {...props} ref={ref} />;
});
