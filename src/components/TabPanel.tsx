import {
  FluentDesignSystem,
  TabPanelDefinition as FluentElementDefinition,
  type TabPanel as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type TabPanelElement = FluentElement & WithChildrenAndSlots<"">;
export interface TabPanelElementProps extends Partial<TabPanelElement> {
  ref?: Ref<TabPanelElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-tab-panel": TabPanelElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const TabPanel = forwardRef<TabPanelElement, TabPanelElementProps>(
  (props, ref) => {
    return <fluent-tab-panel {...props} ref={ref} />;
  }
);
