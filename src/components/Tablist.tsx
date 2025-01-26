import {
  FluentDesignSystem,
  TablistDefinition as FluentElementDefinition,
  TablistAppearance,
  TablistOrientation,
  TablistSize,
  type Tablist as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface TablistProps extends FluentProps<FluentElement> {
  activeId?: string;
  disabled?: boolean;
  orientation?: TablistOrientation;
  appearance?: TablistAppearance;
  size?: TablistSize;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-tablist": TablistProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const Tablist = forwardRef<FluentElement, TablistProps>((props, ref) => {
  return <fluent-tablist {...props} ref={ref} />;
});
