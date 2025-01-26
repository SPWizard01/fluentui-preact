import {
  FluentDesignSystem,
  TabsDefinition as FluentElementDefinition,
  TabsAppearance,
  TabsOrientation,
  TabsSize,
  type Tabs as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface TabsProps extends FluentProps<FluentElement> {
  activeid?: string;
  appearance?: TabsAppearance;
  disabled?: boolean;
  size?: TabsSize;
  orientation?: TabsOrientation;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-tabs": TabsProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Tabs = forwardRef<FluentElement, TabsProps>((props, ref) => {
  return <fluent-tabs {...props} ref={ref} />;
});

