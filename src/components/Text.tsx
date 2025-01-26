import {
  FluentDesignSystem,
  TextDefinition as FluentElementDefinition,
  TextAlign,
  TextFont,
  TextSize,
  TextWeight,
  type Text as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface TextProps extends FluentProps<FluentElement> {
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  font?: TextFont;
  nowrap?: boolean;
  truncate?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  block?: boolean;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-text": TextProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Text = forwardRef<FluentElement, TextProps>((props, ref) => {
  return <fluent-text {...props} ref={ref} />;
});

