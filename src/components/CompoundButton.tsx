import {
  FluentDesignSystem,
  CompoundButtonDefinition as FluentElementDefinition,
  type CompoundButton as FluentElement,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type CompoundButtonElement = FluentElement & WithChildrenAndSlots<"start" | "end">;
export interface CompoundButtonElementProps
  extends Partial<CompoundButtonElement> {
  ref?: Ref<CompoundButtonElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-compound-button": CompoundButtonElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const CompoundButton = forwardRef<
  CompoundButtonElement,
  CompoundButtonElementProps
>((props, ref) => {
  return <fluent-compound-button {...props} ref={ref} />;
});
