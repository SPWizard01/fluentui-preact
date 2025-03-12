import {
  AvatarDefinition,
  FluentDesignSystem,
  type Avatar as FluentElement,
} from "@fluentui/web-components";

import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type AvatarElement = FluentElement & WithChildrenAndSlots<"badge">;
export interface AvatarElementProps extends Partial<AvatarElement> {
  ref?: Ref<AvatarElement>;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-avatar": AvatarElementProps;
    }
  }
}

AvatarDefinition.define(FluentDesignSystem.registry);

export const Avatar = forwardRef<AvatarElement, AvatarElementProps>(
  (props, ref) => {
    return <fluent-avatar {...props} ref={ref} />;
  }
);
