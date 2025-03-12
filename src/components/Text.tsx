import {
  FluentDesignSystem,
  TextDefinition as FluentElementDefinition,
  type Text as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type TextElement = FluentElement & WithChildrenAndSlots<"">;
export interface TextElementProps extends Partial<TextElement> {
  ref?: Ref<TextElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-text": TextElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Text = forwardRef<TextElement, TextElementProps>((props, ref) => {
  return <fluent-text {...props} ref={ref} />;
});
