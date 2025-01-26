import {
  FluentDesignSystem,
  TooltipDefinition as FluentElementDefinition,
  TooltipPositioningOption,
  type Tooltip as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface TooltipProps extends FluentProps<FluentElement> {
  id?: string;
  anchor?: string;
  delay?: number;
  positioning?: TooltipPositioningOption;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-tooltip": TooltipProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Tooltip = forwardRef<FluentElement, TooltipProps>((props, ref) => {
  return <fluent-tooltip {...props} ref={ref} />;
});
