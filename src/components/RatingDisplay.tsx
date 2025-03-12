import {
  FluentDesignSystem,
  RatingDisplayDefinition as FluentElementDefinition,
  type RatingDisplay as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type RatingDisplayElement = FluentElement & WithChildrenAndSlots<"icon">;
export interface RatingDisplayElementProps
  extends Partial<RatingDisplayElement> {
  ref?: Ref<RatingDisplayElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-rating-display": RatingDisplayElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const RatingDisplay = forwardRef<
  RatingDisplayElement,
  RatingDisplayElementProps
>((props, ref) => {
  return <fluent-rating-display {...props} ref={ref} />;
});
