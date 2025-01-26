import {
  FluentDesignSystem,
  ProgressBarDefinition as FluentElementDefinition,
  type ProgressBar as FluentElement,
  ProgressBarShape,
  ProgressBarThickness,
  ProgressBarValidationState,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface ProgressBarProps extends FluentProps<FluentElement> {
  min?: number;
  max?: number;
  shape?: ProgressBarShape;
  thickness?: ProgressBarThickness;
  validationState?: ProgressBarValidationState;
  value?: number;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-progress-bar": ProgressBarProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const ProgressBar = forwardRef<FluentElement, ProgressBarProps>((props, ref) => {
  return <fluent-progress-bar {...props} ref={ref} />;
});

