import {
  DialogDefinition,
  FluentDesignSystem,
  type DialogType,
  type Dialog as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface DialogProps extends FluentProps<FluentElement> {
  type?: DialogType;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-dialog": DialogProps;
    }
  }
}

DialogDefinition.define(FluentDesignSystem.registry);

export const Dialog = forwardRef<FluentElement, DialogProps>((props, ref) => {
  return <fluent-dialog {...props} ref={ref} />;
});
