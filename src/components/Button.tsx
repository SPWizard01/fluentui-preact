import {
  ButtonDefinition,
  ButtonType,
  FluentDesignSystem,
  type Button as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type ButtonElement = FluentElement & WithChildrenAndSlots<"start" | "end">;
export interface ButtonElementProps extends Partial<ButtonElement> {
  ref?: Ref<ButtonElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-button": ButtonElementProps;
    }
  }
}

ButtonDefinition.define(FluentDesignSystem.registry);

export const Button = forwardRef<ButtonElement, ButtonElementProps>(
  (props, ref) => {
    return <fluent-button {...props} ref={ref} />;
  }
);
