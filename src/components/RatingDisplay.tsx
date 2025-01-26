import {
  FluentDesignSystem,
  RatingDisplayDefinition as FluentElementDefinition,
  RatingDisplayColor,
  RatingDisplaySize,
  type RatingDisplay as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface RatingDisplayProps extends FluentProps<FluentElement> {
  value?: number;
  color?: RatingDisplayColor;
  size?: RatingDisplaySize;
  compact?: boolean;
  count?: number;
  max?: number;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-rating-display": RatingDisplayProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const RatingDisplay = forwardRef<FluentElement, RatingDisplayProps>((props, ref) => {
  return <fluent-rating-display {...props} ref={ref} />;
});
