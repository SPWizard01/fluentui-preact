import {
  ImageDefinition,
  FluentDesignSystem,
  type Image as FluentElement,
  ImageFit,
  ImageShape,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface ImageProps extends FluentProps<FluentElement> {
  block?: boolean;
  border?: boolean;
  fit?: ImageFit;
  shadow?: boolean;
  shape?: ImageShape;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-image": ImageProps;
    }
  }
}

ImageDefinition.define(FluentDesignSystem.registry);

export const Image = forwardRef<FluentElement, ImageProps>((props, ref) => {
  return <fluent-image {...props} ref={ref} />;
});
