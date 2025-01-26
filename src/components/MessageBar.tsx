import {
  FluentDesignSystem,
  MessageBarDefinition as FluentElementDefinition,
  type MessageBar as FluentElement,
  MessageBarIntent,
  MessageBarShape,
  MessageBarLayout,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface MessageBarProps extends FluentProps<FluentElement> {
  intent?: MessageBarIntent;
  shape?: MessageBarShape;
  layout?: MessageBarLayout;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-message-bar": MessageBarProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const MessageBar = forwardRef<FluentElement, MessageBarProps>((props, ref) => {
  return <fluent-message-bar {...props} ref={ref} />;
});
