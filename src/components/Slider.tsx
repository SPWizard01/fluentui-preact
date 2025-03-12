import {
  FluentDesignSystem,
  SliderDefinition as FluentElementDefinition,
  type Slider as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type SliderElement = FluentElement & WithChildrenAndSlots<"">;
export interface SliderElementProps extends Partial<SliderElement> {
  ref?: Ref<SliderElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-slider": SliderElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Slider = forwardRef<SliderElement, SliderElementProps>(
  (props, ref) => {
    return <fluent-slider {...props} ref={ref} />;
  }
);
