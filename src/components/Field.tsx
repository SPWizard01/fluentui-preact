import {
  FieldDefinition,
  FieldLabelPosition,
  FluentDesignSystem,
  type Field as FluentElement,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type FieldElement = FluentElement & WithChildrenAndSlots<"heading">;
export interface FieldElementProps extends Partial<FieldElement> {
  ref?: Ref<FieldElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-field": FieldElementProps;
    }
  }
}

FieldDefinition.define(FluentDesignSystem.registry);

export const Field = forwardRef<FieldElement, FieldElementProps>((props, ref) => {
  return <fluent-field {...props} ref={ref} />;
});
