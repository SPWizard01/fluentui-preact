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

export interface AvatarProps extends FluentProps<FluentElement, "badge"> {
  /**
   * Optional activity indicator
   * @type `active` | `inactive` | undefined
   * @default undefined
   */
  active?: AvatarActive;
  /**
   * Indicates the styled appearance of the avatar.
   * @type `ring` | `shadow` | `ring-shadow` | undefined
   */
  appearance?: AvatarAppearance;
  /**
   * Indicates the color of the avatar.
   * @default undefined
   */
  color?: AvatarColor;
  /**
   * Provide custom initials rather than one generated via the name
   * @type string
   * @default undefined
   */
  initials?: string;
  /**
   * The name of the person or entity represented by this Avatar. This should always be provided if it is available.
   * @type string
   * @default undefined
   */
  name?: string;
  /**
   * Indicates the shape of the avatar.
   * @type `circular` | `square`
   * @default circular
   */
  shape?: AvatarShape;
  /**
   * Indicates the size of the avatar.
   * @type number
   * @default 32
   */
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
