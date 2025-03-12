import {
  LabelDefinition,
  FluentDesignSystem,
  type Label as FluentElement,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type LabelElement = FluentElement & WithChildrenAndSlots<"">;
export interface LabelElementProps extends Partial<LabelElement> {
  ref?: Ref<LabelElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-label": LabelElementProps;
    }
  }
}

LabelDefinition.define(FluentDesignSystem.registry);

export const Label = forwardRef<LabelElement, LabelElementProps>(
  (props, ref) => {
    return <fluent-label {...props} ref={ref} />;
  }
);
