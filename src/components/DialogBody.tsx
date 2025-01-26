import {
  type DialogBody as FluentElement,
  DialogBodyDefinition,
  FluentDesignSystem,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface DialogBodyProps extends FluentProps<FluentElement> {}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-dialog-body": DialogBodyProps;
    }
  }
}

DialogBodyDefinition.define(FluentDesignSystem.registry);

export const DialogBody = forwardRef<FluentElement, DialogBodyProps>(
  (props, ref) => {
    return <fluent-dialog-body {...props} ref={ref} />;
  }
);
