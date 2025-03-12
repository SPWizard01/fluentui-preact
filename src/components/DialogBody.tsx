import {
  type DialogBody as FluentElement,
  DialogBodyDefinition,
  FluentDesignSystem,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type DialogBodyElement = FluentElement &
  WithChildrenAndSlots<"action" | "title" | "title-action">;
export interface DialogBodyElementProps extends Partial<DialogBodyElement> {
  ref?: Ref<DialogBodyElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-dialog-body": DialogBodyElementProps;
    }
  }
}

DialogBodyDefinition.define(FluentDesignSystem.registry);

export const DialogBody = forwardRef<DialogBodyElement, DialogBodyElementProps>(
  (props, ref) => {
    return <fluent-dialog-body {...props} ref={ref} />;
  }
);
