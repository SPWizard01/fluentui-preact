import {
  FluentDesignSystem,
  TabDefinition as FluentElementDefinition,
  type Tab as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface TabProps extends FluentProps<FluentElement> {
  disabled?: boolean;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-tab": TabProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Tab = forwardRef<FluentElement, TabProps>((props, ref) => {
  return <fluent-tab {...props} ref={ref} />;
});
