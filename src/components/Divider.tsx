import {
  DividerDefinition,
  FluentDesignSystem,
  type Divider as FluentElement,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type DividerElement = FluentElement & WithChildrenAndSlots<"">;
export interface DividerElementProps extends Partial<DividerElement> {
  ref?: Ref<DividerElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-divider": DividerElementProps;
    }
  }
}

DividerDefinition.define(FluentDesignSystem.registry);

export const Divider = forwardRef<DividerElement, DividerElementProps>((props, ref) => {
  return <fluent-divider {...props} ref={ref} />;
});
