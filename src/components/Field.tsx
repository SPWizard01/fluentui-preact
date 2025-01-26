import {
  FieldDefinition,
  FieldLabelPosition,
  FluentDesignSystem,
  type Field as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface FieldProps extends FluentProps<FluentElement> {
  labelPosition?: FieldLabelPosition;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-field": FieldProps;
    }
  }
}

FieldDefinition.define(FluentDesignSystem.registry);

export const Field = forwardRef<FluentElement, FieldProps>((props, ref) => {
  return <fluent-field {...props} ref={ref} />;
});
