import {
  FluentDesignSystem,
  TablistDefinition as FluentElementDefinition,
  type Tablist as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type TablistElement = FluentElement & WithChildrenAndSlots<"">;
export interface TablistElementProps extends Partial<TablistElement> {
  ref?: Ref<TablistElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-tablist": TablistElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Tablist = forwardRef<TablistElement, TablistElementProps>(
  (props, ref) => {
    return <fluent-tablist {...props} ref={ref} />;
  }
);
