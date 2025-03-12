import {
  FluentDesignSystem,
  MessageBarDefinition as FluentElementDefinition,
  type MessageBar as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import type { WithChildrenAndSlots } from "../utility/helpertypes";

export type MessageBarElement = FluentElement &
  WithChildrenAndSlots<"icon" | "action" | "dismiss">;
export interface MessageBarElementProps extends Partial<MessageBarElement> {
  ref?: Ref<MessageBarElement>;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-message-bar": MessageBarElementProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const MessageBar = forwardRef<MessageBarElement, MessageBarElementProps>(
  (props, ref) => {
    return <fluent-message-bar {...props} ref={ref} />;
  }
);
