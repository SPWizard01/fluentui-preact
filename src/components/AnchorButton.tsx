import {
  AnchorButtonDefinition,
  FluentDesignSystem,
  type AnchorButton as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type AmchorButtonElement = FluentElement &
  WithChildrenAndSlots<"start" | "end">;
export interface AmchorButtonElementProps extends Partial<AmchorButtonElement> {
  ref?: Ref<AmchorButtonElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-anchor-button": AmchorButtonElementProps;
    }
  }
}

AnchorButtonDefinition.define(FluentDesignSystem.registry);

export const AnchorButton = forwardRef<
  AmchorButtonElement,
  AmchorButtonElementProps
>((props, ref) => {
  return <fluent-anchor-button {...props} ref={ref} />;
});
