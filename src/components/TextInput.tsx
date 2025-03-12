import {
  FluentDesignSystem,
  TextInputDefinition as FluentElementDefinition,
  type TextInput as FluentElement,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type TextInputElement = FluentElement & WithChildrenAndSlots<"">;
export interface TextInputElementProps extends Partial<TextInputElement> {
  ref?: Ref<TextInputElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-text-input": TextInputElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const TextInput = forwardRef<TextInputElement, TextInputElementProps>(
  (props, ref) => {
    return <fluent-text-input {...props} ref={ref} />;
  }
);
