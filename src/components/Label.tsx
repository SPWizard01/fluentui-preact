import {
  LabelDefinition,
  FluentDesignSystem,
  type Label as FluentElement,
  LabelSize,
  LabelWeight,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface LabelProps extends FluentProps<FluentElement> {
  required?: boolean;
  size?: LabelSize;
  weight?: LabelWeight;
  disabled?: boolean;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-label": LabelProps;
    }
  }
}

LabelDefinition.define(FluentDesignSystem.registry);

export const Label = forwardRef<FluentElement, LabelProps>((props, ref) => {
  return <fluent-label {...props} ref={ref} />;
});
