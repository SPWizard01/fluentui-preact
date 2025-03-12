import {
  LinkDefinition,
  FluentDesignSystem,
  type Link as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type LinkElement = FluentElement & WithChildrenAndSlots<"">;
export interface LinkElementProps extends Partial<LinkElement> {
  ref?: Ref<LinkElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-link": LinkElementProps;
    }
  }
}

LinkDefinition.define(FluentDesignSystem.registry);

export const Link = forwardRef<LinkElement, LinkElementProps>((props, ref) => {
  return <fluent-link {...props} ref={ref} />;
});
