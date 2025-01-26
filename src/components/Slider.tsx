import {
  FluentDesignSystem,
  SliderDefinition as FluentElementDefinition,
  SliderOrientation,
  SliderSize,
  type Slider as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface SliderProps extends FluentProps<FluentElement> {
  disabled?: boolean;
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  size?: SliderSize;
  orientation?: SliderOrientation;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-slider": SliderProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Slider = forwardRef<FluentElement, SliderProps>((props, ref) => {
  return <fluent-slider {...props} ref={ref} />;
});
