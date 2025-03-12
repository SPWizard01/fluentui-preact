import {
  FluentDesignSystem,
  TextAreaDefinition as FluentElementDefinition,
  type TextArea as FluentElement,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type TextAreaElement = FluentElement & WithChildrenAndSlots;
export interface TextAreaElementProps extends Partial<TextAreaElement> {
  ref?: Ref<TextAreaElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-textarea": TextAreaElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);
export const TextArea = forwardRef<TextAreaElement, TextAreaElementProps>(
  (props, ref) => {
    return <fluent-textarea {...props} ref={ref} />;
  }
);
