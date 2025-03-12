import {
  CheckboxDefinition,
  FluentDesignSystem,
  type Checkbox as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type CheckboxElement = FluentElement & WithChildrenAndSlots<"start" | "end">;
export interface CheckboxElementProps extends Partial<CheckboxElement> {
  ref?: Ref<CheckboxElement>;
  children?: never;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-checkbox": CheckboxElementProps;
    }
  }
}

CheckboxDefinition.define(FluentDesignSystem.registry);

export const Checkbox = forwardRef<CheckboxElement, CheckboxElementProps>(
  (props, ref) => {
    return <fluent-checkbox {...props} ref={ref} />;
  }
);
