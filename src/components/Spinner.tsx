import {
  FluentDesignSystem,
  SpinnerDefinition as FluentElementDefinition,
  SpinnerAppearance,
  SpinnerSize,
  type Spinner as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface SpinnerProps extends FluentProps<FluentElement> {
  appearance?: SpinnerAppearance;
  size?: SpinnerSize;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-spinner": SpinnerProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Spinner = forwardRef<FluentElement, SpinnerProps>((props, ref) => {
  return <fluent-spinner {...props} ref={ref} />;
});
