import {
  AnchorButtonDefinition,
  FluentDesignSystem,
  type AnchorButton as FluentElement,
  AnchorButtonAppearance,
  AnchorTarget,
  AnchorButtonShape,
  AnchorButtonSize,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface AnchorButtonProps extends FluentProps<FluentElement> {
  href?: string;
  appearance?: AnchorButtonAppearance;
  shape?: AnchorButtonShape;
  hreflang?: string;
  referrerpolicy?: string;
  rel?: string;
  type?: string;
  target?: AnchorTarget;
  iconOnly?: boolean;
  size?: AnchorButtonSize;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-anchor-button": AnchorButtonProps;
    }
  }
}

AnchorButtonDefinition.define(FluentDesignSystem.registry);

export const AnchorButton = forwardRef<FluentElement, AnchorButtonProps>((props, ref) => {
  return <fluent-anchor-button {...props} ref={ref} />;
});