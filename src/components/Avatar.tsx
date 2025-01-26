import {
  AvatarActive,
  AvatarAppearance,
  AvatarColor,
  AvatarDefinition,
  AvatarShape,
  AvatarSize,
  FluentDesignSystem,
  type Avatar as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface AvatarProps extends FluentProps<FluentElement> {
  active?: AvatarActive;
  appearance?: AvatarAppearance;
  color?: AvatarColor;
  initials?: string;
  name?: string;
  shape?: AvatarShape;
  size?: AvatarSize;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-avatar": AvatarProps;
    }
  }
}

AvatarDefinition.define(FluentDesignSystem.registry);

export const Avatar = forwardRef<FluentElement, AvatarProps>((props, ref) => {
  return <fluent-avatar {...props} ref={ref} />;
});
