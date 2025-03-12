import {
  DialogDefinition,
  FluentDesignSystem,
  type Dialog as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { WithChildrenAndSlots } from "../utility/helpertypes";
import type { Ref } from "preact";

export type DialogElement = FluentElement & WithChildrenAndSlots;
export interface DialogElementProps extends Partial<DialogElement> {
  ref?: Ref<DialogElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-dialog": DialogElementProps;
    }
  }
}

DialogDefinition.define(FluentDesignSystem.registry);

export const Dialog = forwardRef<DialogElement, DialogElementProps>(
  (props, refObject: any) => {
    return <fluent-dialog {...props} ref={refObject} />;
  }
);
