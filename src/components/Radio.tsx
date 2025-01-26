import {
  FluentDesignSystem,
  RadioDefinition as FluentElementDefinition,
  type Radio as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface RadioProps extends FluentProps<FluentElement> {
  checked?: boolean;
  disabled?: boolean;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-radio": RadioProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Radio = forwardRef<FluentElement, RadioProps>((props, ref) => {
  return <fluent-radio {...props} ref={ref} />;
});
