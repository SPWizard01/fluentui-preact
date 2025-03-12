import {
  FluentDesignSystem,
  SpinnerDefinition as FluentElementDefinition,
  SpinnerAppearance,
  SpinnerSize,
  type Spinner as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type SpinnerElement = FluentElement & WithChildrenAndSlots<"">;
export interface SpinnerElementProps extends Partial<SpinnerElement> {
  ref?: Ref<SpinnerElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-spinner": SpinnerElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Spinner = forwardRef<SpinnerElement, SpinnerElementProps>(
  (props, ref) => {
    return <fluent-spinner {...props} ref={ref} />;
  }
);
