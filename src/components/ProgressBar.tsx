import {
  FluentDesignSystem,
  ProgressBarDefinition as FluentElementDefinition,
  type ProgressBar as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type ProgressBarElement = FluentElement & WithChildrenAndSlots<"">;
export interface ProgressBarElementProps extends Partial<ProgressBarElement> {
  ref?: Ref<ProgressBarElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-progress-bar": ProgressBarElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const ProgressBar = forwardRef<
  ProgressBarElement,
  ProgressBarElementProps
>((props, ref) => {
  return <fluent-progress-bar {...props} ref={ref} />;
});
