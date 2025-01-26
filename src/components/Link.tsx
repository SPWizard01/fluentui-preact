import {
  LinkDefinition,
  FluentDesignSystem,
  type Link as FluentElement,
  LinkTarget,
  LinkAppearance,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface LinkProps extends FluentProps<FluentElement> {
  href?: string;
  hreflang?: string;
  referrerpolicy?: string;
  rel?: string;
  type?: string;
  target?: LinkTarget;
  inline?: string;
  appearance?: LinkAppearance;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-link": LinkProps;
    }
  }
}

LinkDefinition.define(FluentDesignSystem.registry);

export const Link = forwardRef<FluentElement, LinkProps>((props, ref) => {
  return <fluent-link {...props} ref={ref} />;
});
