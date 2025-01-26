import {
  DividerAlignContent,
  DividerAppearance,
  DividerDefinition,
  DividerOrientation,
  DividerRole,
  FluentDesignSystem,
  type Divider as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface DividerProps extends FluentProps<FluentElement> {
  alignContent?: DividerAlignContent;
  appearance?: DividerAppearance;
  role?: DividerRole;
  inset?: boolean;
  orientation?: DividerOrientation;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-divider": DividerProps;
    }
  }
}

DividerDefinition.define(FluentDesignSystem.registry);

export const Divider = forwardRef<FluentElement, DividerProps>((props, ref) => {
  return <fluent-divider {...props} ref={ref} />;
});
