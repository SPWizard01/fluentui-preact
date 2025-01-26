import {
  FluentDesignSystem,
  TabPanelDefinition as FluentElementDefinition,
  type TabPanel as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface TabPanelProps extends FluentProps<FluentElement> {}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-tab-panel": TabPanelProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const TabPanel = forwardRef<FluentElement, TabPanelProps>(
  (props, ref) => {
    return <fluent-tab-panel {...props} ref={ref} />;
  }
);
