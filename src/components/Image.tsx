import {
  ImageDefinition,
  FluentDesignSystem,
  type Image as FluentElement,
  ImageFit,
  ImageShape,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type ImageElement = FluentElement & WithChildrenAndSlots<"">;
export interface ImageElementProps extends Partial<ImageElement> {
  ref?: Ref<ImageElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-image": ImageElementProps;
    }
  }
}

ImageDefinition.define(FluentDesignSystem.registry);

export const Image = forwardRef<ImageElement, ImageElementProps>(
  (props, ref) => {
    return <fluent-image {...props} ref={ref} />;
  }
);
